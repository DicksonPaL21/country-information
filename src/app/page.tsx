'use client'

import Ads from '@/components/Ads'
import Card from '@/components/Card'
import Country from '@/components/Country'
import CountryDetails from '@/components/Country/CountryDetails'
import Details from '@/components/Details'
import SearchField from '@/components/SearchField'
import { InView } from 'react-intersection-observer'
import { useDebounceCallback } from 'usehooks-ts'
import { useAppContext } from './providers'

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
      <div className="my-4 flex justify-center">
        <Ads className="h-[122px] w-[760px]" />
        <Ads className="h-[122px] w-[760px]" />
      </div>
      <main className="flex w-full justify-center gap-9 px-20 py-5">
        <Ads className="h-[600px] w-[300px]" />
        <InView
          onChange={() => getAllCountries()}
          className="w-full max-w-5xl items-start justify-between font-mono text-sm lg:flex lg:gap-5"
          triggerOnce
        >
          <div className="-mr-2.5 flex shrink-0 flex-col gap-4 lg:w-4/12">
            <SearchField onValueCallback={onValueCallbackFn} />
            <Country className="h-full space-y-1" />
          </div>
          <div className="w-full">
            <Card className="grid w-full">
              <CountryDetails />
            </Card>
            <Details />
            <div className="mt-9 flex justify-center">
              <Ads className="h-[282px] w-[332px]" />
              <Ads className="h-[282px] w-[332px]" />
            </div>
          </div>
        </InView>
        <Ads className="h-[600px] w-[300px]" />
      </main>
      <div className="my-4 flex justify-center">
        <Ads className="h-[122px] w-[760px]" />
        <Ads className="h-[122px] w-[760px]" />
      </div>
    </>
  )
}
