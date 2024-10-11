'use client'

import Ads from '@/components/Ads'
import Card from '@/components/Card'
import Country from '@/components/Country'
import CountryDetails from '@/components/Country/CountryDetails'
import Details from '@/components/Details'
import SearchField from '@/components/SearchField'
import { InView } from 'react-intersection-observer'
import { useDebounceCallback } from 'usehooks-ts'
import { useAppContext } from './provider'

export default function Page() {
  const { getAllCountries, getCountryByName } = useAppContext()

  const onValueCallbackFn = useDebounceCallback((value: string) => {
    if (!!value) {
      return getCountryByName(value)
    }
    return getAllCountries()
  }, 500)

  return (
    <>
      <div className="flex justify-center my-4">
        <Ads className="w-[760px] h-[122px]" />
        <Ads className="w-[760px] h-[122px]" />
      </div>
      <main className="px-20 py-5 w-full flex justify-center gap-9">
        <Ads className="w-[300px] h-[600px]" />
        <InView
          onChange={() => getAllCountries()}
          className="w-full max-w-5xl items-start justify-between font-mono text-sm lg:flex lg:gap-5"
          triggerOnce
        >
          <div className="lg:w-4/12 flex flex-col gap-4 -mr-2.5">
            <SearchField onValueCallback={onValueCallbackFn} />
            <Country className="w-full h-full space-y-1" />
          </div>
          <div className="lg:w-8/12">
            <Card className="w-full grid">
              <CountryDetails />
            </Card>
            <Details />
            <div className="flex justify-center mt-9">
              <Ads className="w-[332px] h-[282px]" />
              <Ads className="w-[332px] h-[282px]" />
            </div>
          </div>
        </InView>
        <Ads className="w-[300px] h-[600px]" />
      </main>
      <div className="flex justify-center my-4">
        <Ads className="w-[760px] h-[122px]" />
        <Ads className="w-[760px] h-[122px]" />
      </div>
    </>
  )
}
