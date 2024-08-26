'use client'

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
    <InView
      as="main"
      onChange={() => getAllCountries()}
      className="flex min-h-screen flex-col items-center justify-between p-20"
      triggerOnce
    >
      <div className="max-w-5xl w-full items-start justify-between font-mono text-sm lg:flex lg:gap-5">
        <div className="lg:w-4/12 flex flex-col gap-4 -mr-2.5">
          <SearchField onValueCallback={onValueCallbackFn} />
          <Country className="w-full space-y-1" />
        </div>
        <div className="lg:w-8/12">
          <Card className="w-full grid">
            <CountryDetails />
          </Card>
          <Details />
        </div>
      </div>
    </InView>
  )
}
