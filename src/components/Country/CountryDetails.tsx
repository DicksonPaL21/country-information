import React from 'react'
import { CountryDetailsTypes } from './types'
import Flag from './Flag'

const CountryDetails = ({ data }: CountryDetailsTypes) => {
  if (!data) {
    return (
      <div className="grid place-items-center h-96">
        <h1 className="text-neutral-700 text-3xl">Please select country!</h1>
      </div>
    )
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
            (currency) =>
              `${data.currencies[currency].name} (${data.currencies[currency].symbol})`
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
  ]

  return (
    <>
      <h1 className="text-4xl mb-12">{data.name.official}</h1>
      <div className="lg:flex-row-reverse">
        <div className="lg:w-6/12 float-right">
          <Flag data={data} />
        </div>
        <div className="lg:w-6/12 float-left space-y-2">
          {details.map((detail, idx) => (
            <p key={idx}>
              <span>{detail.title}</span>
              {detail.value}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

export default CountryDetails
