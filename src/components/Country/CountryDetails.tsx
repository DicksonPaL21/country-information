import { useAppContext } from '@/app/provider'
import Flag from './Flag'

const CountryDetails = () => {
  const { data, activeIndex } = useAppContext()
  const currentData = data[activeIndex]

  if (!currentData) {
    return (
      <div className="grid place-items-center h-96">
        <h1 className="text-neutral-700 text-3xl">Please select country!</h1>
      </div>
    )
  }

  const details = [
    {
      title: 'Country Name: ',
      value: currentData.name.common,
    },
    {
      title: 'Continents: ',
      value: currentData.continents.join(', '),
    },
    {
      title: 'Region: ',
      value: currentData.region,
    },
    {
      title: 'Currency: ',
      value: currentData.currencies
        ? Object.keys(currentData.currencies).map(
            (currency) =>
              `${currentData.currencies[currency].name} (${currentData.currencies[currency].symbol})`
          )
        : 'None',
    },
    {
      title: 'Languages: ',
      value: currentData.languages
        ? Object.keys(currentData.languages)
            .map((language) => currentData.languages[language])
            .join(', ')
        : 'None',
    },
    {
      title: 'Capital: ',
      value: currentData.capital || 'None',
    },
    {
      title: 'Population: ',
      value: currentData.population,
    },
    {
      title: 'Time Zones: ',
      value: currentData.timezones.join(', '),
    },
  ]

  return (
    <>
      <h1 className="text-4xl mb-12">{currentData.name.official}</h1>
      <div className="lg:flex-row-reverse">
        <div className="lg:w-6/12 float-right">
          <Flag data={currentData} />
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
