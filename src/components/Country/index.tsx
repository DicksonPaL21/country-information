import { useAppContext } from '@/app/providers'
import Card from '@/components/Card'
import { cn } from '@/utils/formatters/cn'
import FlatList from 'flatlist-react'
import React, { useCallback } from 'react'
import { InView } from 'react-intersection-observer'
import Skeleton from 'react-loading-skeleton'
import Flag from './Flag'
import FlagDetails from './FlagDetails'
import { CountryTypes, Types } from './types'

const FallbackLoader = ({ count = 1 }: { count?: number }) => {
  return (
    <>
      {[...new Array(count)].map((_, idx) => (
        <Card key={idx} className="border-none !bg-transparent">
          <div className="flex items-center gap-4">
            <div className="w-7/12">
              <Skeleton count={4} />
            </div>
            <div className="w-5/12">
              <Skeleton height={80} />
            </div>
          </div>
        </Card>
      ))}
    </>
  )
}

const Country = ({
  fallback = <FallbackLoader count={4} />,
  className,
  ...props
}: Types) => {
  const {
    data,
    isLoading,
    activeCountry,
    setActiveCountry,
    setIsSelectCountry,
  } = useAppContext()

  const RenderCountry = useCallback(
    (country: CountryTypes) => {
      const cardProps = {
        className: cn('country-card snap-start cursor-pointer', {
          '!bg-zinc-800/30': activeCountry?.name.common === country.name.common,
        }),
        onClick: (e: React.MouseEvent<HTMLDivElement>) => {
          e.preventDefault()
          setActiveCountry(country)
          setIsSelectCountry(true)
        },
      }

      return (
        <InView
          key={country.name.official}
          delay={100}
          trackVisibility
          triggerOnce
        >
          {({ inView, ref }) => (
            <Card ref={ref} {...cardProps} hoverable>
              <div className="flex items-center gap-4">
                <div className="w-7/12">
                  {inView ? (
                    <FlagDetails data={country} />
                  ) : (
                    <Skeleton count={4} />
                  )}
                </div>
                <div className="w-5/12">
                  {inView ? <Flag data={country} /> : <Skeleton height={80} />}
                </div>
              </div>
            </Card>
          )}
        </InView>
      )
    },
    [data, activeCountry?.name.common, setActiveCountry, setIsSelectCountry]
  )

  return (
    <div
      className={cn(
        'scrollbar -mr-2.5 max-h-[calc(100vh-10rem-244px)] w-full snap-y overflow-y-auto pr-2.5',
        className
      )}
      {...props}
    >
      {isLoading ? (
        fallback
      ) : (
        <FlatList
          list={data}
          renderItem={RenderCountry}
          renderWhenEmpty={() => (
            <p className="text-center text-xs">- List is empty -</p>
          )}
        />
      )}
    </div>
  )
}

export default React.memo(Country)
