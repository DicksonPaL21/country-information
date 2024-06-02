import { useAppContext } from '@/app/provider'
import Card from '@/components/Card'
import { cn } from '@/utils/formatters/cn'
import React, { useMemo } from 'react'
import { InView } from 'react-intersection-observer'
import Skeleton from 'react-loading-skeleton'
import Flag from './Flag'
import FlagDetails from './FlagDetails'
import { CountryTypes, Types } from './types'

const FallbackLoader = ({ count = 1 }: { count?: number }) => {
  return (
    <>
      {[...new Array(count)].map((_, idx) => (
        <Card key={idx} className="!bg-transparent border-none">
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
    error,
    activeCountry,
    setActiveCountry,
    setIsSelectCountry,
  } = useAppContext()

  const countries = useMemo(() => {
    return data?.map((country: CountryTypes, idx: number) => {
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
        <InView key={idx} delay={100} trackVisibility triggerOnce>
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
    })
  }, [data, activeCountry?.name.common, setActiveCountry, setIsSelectCountry])

  if (error)
    return (
      <div className={cn(className)} {...props}>
        <p className="text-center text-xs">- {error.message} -</p>
      </div>
    )

  return (
    <div
      className={cn(
        'max-h-[calc(100vh-11rem-38px)] overflow-y-auto scrollbar snap-y pr-2.5 -mr-2.5',
        className
      )}
      {...props}
    >
      {isLoading ? fallback : countries}
    </div>
  )
}

export default React.memo(Country)
