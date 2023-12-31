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
      <div className="max-w-5xl w-full items-start justify-between font-mono text-sm lg:flex">
        <Country className="lg:w-4/12" {...countryProps} />
        <div className="lg:w-8/12">
          <Card className="lg:w-8/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            earum id repellendus rerum rem, officiis iusto necessitatibus magnam
            libero aliquid consequuntur assumenda veritatis, temporibus officia
            ullam maiores a odio est?
          </Card>
          <div className="mb-32 grid text-center lg:max-w-8/12 lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Docs{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Find in-depth information about Next.js features and API.
              </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
