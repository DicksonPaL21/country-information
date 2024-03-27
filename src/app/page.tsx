'use client'

import Card from '@/components/Card'
import Country from '@/components/Country'
import CountryDetails from '@/components/Country/CountryDetails'
import { useState } from 'react'
import { actions, useDebouncedEffect } from '../helpers'

export default function Page() {
  const [data, setData] = useState<any[]>([])
  const [error, setError] = useState()
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const [isSelectCountry, setIsSelectCountry] = useState(false)

  const query = new URLSearchParams({
    fields:
      'flags,name,coatOfArms,idd,timezones,maps,continents,region,currencies,languages,capital,population',
  })

  const getAllCountries = () => {
    const onSuccess = (res: any) => setData(res)
    const onError = (res: any) => setError(res)
    actions.getCountries(onSuccess, onError, query.toString())
  }

  const getCountryByName = (name: string) => {
    const onSuccess = (res: any) => setData(res)
    const onError = (res: any) => setError(res)
    actions.getCountryByName(name, onSuccess, onError)
  }

  const countryProps = {
    data,
    error,
    activeIndex,
    setActiveIndex: (idx: number) => {
      setActiveIndex(idx)
      setIsSelectCountry(true)
    },
  }

  useDebouncedEffect(getAllCountries, 200, [])

  console.log('cc-data', data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-start justify-between font-mono text-sm lg:flex lg:gap-5">
        <Country className="lg:w-4/12 space-y-1" {...countryProps} />
        <div className="lg:w-8/12">
          <Card className="w-full grid">
            <CountryDetails data={data[activeIndex]} />
          </Card>
          {activeIndex !== -1 && (
            <div className="grid gap-2 md:flex md:justify-end my-4">
              <a target="_blank" href={data[activeIndex]?.maps.googleMaps}>
                View Map
              </a>
              <button
                className="lg:hidden"
                onClick={() => setIsSelectCountry(false)}
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
