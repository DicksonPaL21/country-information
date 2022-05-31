import React, { useState, useEffect } from 'react';
import { useDebouncedEffect, actions } from './helpers';
import Spinner from './components/Spinner';
import SearchField from './components/SearchField';
import Country from './components/Country/Country';
import Card from './components/Card';

const Flag = ({ data }) => {
  const flagProps = {
    className: 'img-fluid w-100',
    src: data.flags.svg,
    alt: data.name.common,
  };
  return <img {...flagProps} />;
};

const CardBody = ({ data }) => {
  if (!data) {
    return <h1 className="display-6 text-muted">Please select country!</h1>;
  }

  const details = [
    {
      title: 'Country Name: ',
      value: data.name.common,
    },
    {
      title: 'Continents: ',
      value: data.continents.join(', '),
    },
    {
      title: 'Region: ',
      value: data.region,
    },
    {
      title: 'Currency: ',
      value: data.currencies
        ? Object.keys(data.currencies).map(
            (currency) => `${currency} (${data.currencies[currency].symbol})`
          )
        : 'None',
    },
    {
      title: 'Languages: ',
      value: data.languages
        ? Object.keys(data.languages)
            .map((language) => data.languages[language])
            .join(', ')
        : 'None',
    },
    {
      title: 'Capital: ',
      value: data.capital || 'None',
    },
    {
      title: 'Population: ',
      value: data.population,
    },
    {
      title: 'Time Zones: ',
      value: data.timezones.join(', '),
    },
  ];

  return (
    <div className="card-body w-100">
      <h1 className="display-6 mb-5">{data.name.official}</h1>
      <div className="row-lg-reverse">
        <div className="col-lg-6 mb-3 float-end">
          <Flag data={data} />
        </div>
        <div className="col-lg-6 float-start">
          {details.map((detail, idx) => (
            <p key={idx}>
              <span>{detail.title}</span>
              {detail.value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  const [data, setData] = useState(null);
  const [onSearch, setOnSearch] = useState();
  const [error, setError] = useState();
  const [activeIndex, setActiveIndex] = useState(null);
  const [isSelectCountry, setIsSelectCountry] = useState(false);

  useEffect(() => {
    getAllCountries();
  }, []);

  useDebouncedEffect(
    () => {
      if (onSearch) {
        getCountryByName(onSearch);
      } else getAllCountries();
    },
    500,
    [onSearch]
  );

  const getAllCountries = () => {
    const onSuccess = (_) => setData(_.response);
    const onError = (_) => setError(_.response);
    actions.getCountries(onSuccess, onError);
  };

  const getCountryByName = (name) => {
    const onSuccess = (_) => setData(_.response);
    const onError = (_) => setError(_.response);
    actions.getCountryByName(name, onSuccess, onError);
  };

  const searchFieldProps = {
    placeholder: 'Search country name',
    onChange: (_data) => {
      setData([]);
      setError();
      setActiveIndex(null);
      setIsSelectCountry(false);
      setOnSearch(_data);
    },
  };

  const countryProps = {
    data,
    activeIndex,
    setActiveIndex: (idex) => {
      setActiveIndex(idex);
      setIsSelectCountry(true);
    },
    fallback: <Spinner />,
    error,
  };

  const menuProps = {
    className: `menu col-md-5 col-lg-4 col-xl-3 px-0 px-md-3 ${
      !isSelectCountry ? 'active' : 'in-active'
    }`,
  };

  const detailsProps = {
    className: `details col-md-7 col-lg-8 col-xl-9 mt-md-4 px-0 px-md-3 ${
      isSelectCountry ? 'active' : 'in-active'
    }`,
  };

  if (!data) {
    return <Spinner style={{ height: '100vh' }} />;
  }

  return (
    <div className="container row mx-auto px-3">
      <div {...menuProps}>
        <div className="d-flex flex-column">
          <SearchField {...searchFieldProps} />
          <Country {...countryProps} />
        </div>
      </div>
      {setTimeout(() => (<div {...detailsProps}>
        <div className="mt-3 mt-md-5">
          <Card
            style={{ minHeight: '448px' }}
            loading={activeIndex === null && !data.length}
            loader={<Spinner style={{ minHeight: '448px' }} />}
            className="d-flex justify-content-center align-items-center"
          >
            <CardBody data={data[activeIndex]} />
          </Card>
          {activeIndex !== null && (
            <div className="d-grid gap-2 d-md-flex justify-content-md-end my-2">
              <a
                target="_blank"
                href={data[activeIndex].maps.googleMaps}
                className="btn"
              >
                View Map
              </a>
              <button
                className="btn btn-back"
                onClick={() => setIsSelectCountry(false)}
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>), 1000)
    </div>
  );
}

export default App;
