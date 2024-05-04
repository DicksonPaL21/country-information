'use client'

import Card from '@/components/Card'
import Country from '@/components/Country'
import CountryDetails from '@/components/Country/CountryDetails'
import { useAppContext } from './provider'

export default function Page() {
  const { data, activeIndex, setIsSelectCountry } = useAppContext()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-start justify-between font-mono text-sm lg:flex lg:gap-5">
        <Country className="lg:w-4/12 space-y-1" />
        <div className="lg:w-8/12">
          <Card className="w-full grid">
            <CountryDetails />
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
