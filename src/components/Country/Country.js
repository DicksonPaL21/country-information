import React from 'react';
import Card from '../Card';
import './Country.scss';

const Flag = ({ data }) => {
  const flagProps = {
    className: 'img-fluid w-100',
    src: data.flags.svg,
    alt: data.name.common,
  };
  return <img {...flagProps} />;
};

const CardBody = ({ data }) => {
  const cardBody = {
    className: 'card-body text-light py-0 px-2',
    style: {
      '--data-coat-of-arms': `url(${data.coatOfArms.svg})`,
    },
  };

  return (
    <div {...cardBody}>
      <p className="card-text m-0" title="Country Code">
        {data.idd.root}
      </p>
      <p className="card-text m-0" title="Country Name">
        {data.name.common}
      </p>
      <p className="card-text m-0" title="Time Zones">
        {data.timezones.join(', ')}
      </p>
      <p className="card-text m-0" title="Calling Code">
        {data.idd.suffixes
          ?.map((sfx) => [data.idd.root, sfx].join(''))
          .join(', ')}
      </p>
    </div>
  );
};

const Country = ({
  data,
  activeIndex,
  setActiveIndex,
  fallback,
  error,
  ...props
}) => {
  if (error)
    return (
      <div className="countries px-3">
        <p className="not-found">- {error.message} -</p>
      </div>
    );

  return (
    <div className="countries px-3 scrollbar" {...props}>
      {!data.length
        ? fallback
        : data.map((dd, idx) => {
            const cardProps = {
              key: idx,
              className: activeIndex === idx ? 'active' : '',
              onClick: (e) => {
                e.preventDefault();
                setActiveIndex(idx);
              },
            };

            return (
              <Card {...cardProps}>
                <div className="row g-0">
                  <div className="col-7">
                    <CardBody data={dd} />
                  </div>
                  <div className="col-5 d-flex align-items-center">
                    <Flag data={dd} />
                  </div>
                </div>
              </Card>
            );
          })}
    </div>
  );
};

export default React.memo(Country);
