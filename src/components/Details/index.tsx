import { useAppContext } from '@/app/providers'

const Details = () => {
  const { activeCountry, setIsSelectCountry } = useAppContext()

  if (!activeCountry) {
    return <></>
  }

  return (
    <div className="my-4 grid gap-2 md:flex md:justify-end">
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
