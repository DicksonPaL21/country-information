import { useAppContext } from '@/app/provider'
import { MapIcon } from '../icons/Map'
import Flag from './Flag'

const CountryDetails = () => {
  const { activeCountry } = useAppContext()

  if (!activeCountry) {
    return (
      <div className="grid h-96 place-items-center">
        <div className="flex flex-col items-center">
          <MapIcon className="size-32 stroke-neutral-700" />
          <h1 className="text-3xl text-neutral-700">Please select country!</h1>
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
      <h1 className="mb-12 text-4xl">{activeCountry.name.official}</h1>
      <div className="lg:flex-row-reverse">
        <div className="float-right lg:w-6/12">
          <Flag data={activeCountry} />
        </div>
        <div className="float-left space-y-2 lg:w-6/12">
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
