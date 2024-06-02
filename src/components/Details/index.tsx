import { useAppContext } from '@/app/provider'

const Details = () => {
  const { activeCountry, setIsSelectCountry } = useAppContext()

  if (!activeCountry) {
    return <></>
  }

  return (
    <div className="grid gap-2 md:flex md:justify-end my-4">
      <a target="_blank" href={activeCountry?.maps.googleMaps}>
        View Map
      </a>
      <button className="lg:hidden" onClick={() => setIsSelectCountry(false)}>
        Back
      </button>
    </div>
  )
}

export default Details
