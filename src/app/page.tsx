'use client'

import Card from '@/components/Card'
import Country from '@/components/Country'
import Spinner from '@/components/Spinner'
import { useState } from 'react'
import { flags } from './flags'

export default function Page() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const countryProps = {
    data: flags,
    activeIndex,
    setActiveIndex: (idx: number) => {
      setActiveIndex(idx)
    },
    fallback: <Spinner />,
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-start justify-between font-mono text-sm lg:flex lg:gap-5">
        <Country className="lg:w-4/12 space-y-1" {...countryProps} />
        <div className="lg:w-8/12">
          <Card className="w-full">
            <div className="h-96 grid place-items-center">
              <h1 className="text-neutral-700 text-3xl">
                Please select country!
              </h1>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
