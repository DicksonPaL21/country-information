import { useAppContext } from '@/app/provider'
import { MapIcon } from '../icons/Map'
import Flag from './Flag'

const CountryDetails = () => {
  const { activeCountry } = useAppContext()

  if (!activeCountry) {
    return (
      <div className="grid place-items-center h-96">
        <div className="flex flex-col items-center">
          <MapIcon className="size-32 stroke-neutral-700" />
          <h1 className="text-neutral-700 text-3xl">Please select country!</h1>
        </div>
      </div>
    )
  }

  const details = [
    {
      title: 'Country Name: ',
      value: activeCountry.name.common,
    },
    {
      title: 'Continents: ',
      value: activeCountry.continents.join(', '),
    },
    {
      title: 'Region: ',
      value: activeCountry.region,
    },
    {
      title: 'Currency: ',
      value: activeCountry.currencies
        ? Object.keys(activeCountry.currencies).map(
            (currency) =>
              `${activeCountry.currencies[currency].name} (${activeCountry.currencies[currency].symbol})`
          )
        : 'None',
    },
    {
      title: 'Languages: ',
      value: activeCountry.languages
        ? Object.keys(activeCountry.languages)
            .map((language) => activeCountry.languages[language])
            .join(', ')
        : 'None',
    },
    {
      title: 'Capital: ',
      value: activeCountry.capital || 'None',
    },
    {
      title: 'Population: ',
      value: activeCountry.population,
    },
    {
      title: 'Time Zones: ',
      value: activeCountry.timezones.join(', '),
    },
  ]

  return (
    <>
      <h1 className="text-4xl mb-12">{activeCountry.name.official}</h1>
      <div className="lg:flex-row-reverse">
        <div className="lg:w-6/12 float-right">
          <Flag data={activeCountry} />
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
