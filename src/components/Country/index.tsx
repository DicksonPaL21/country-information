'use client'

import Card from '@/components/Card'
import cn from 'classnames'
import React, { useMemo } from 'react'
import Flag from './Flag'
import FlagDetails from './FlagDetails'
import { Types } from './types'

const Country = ({
  data,
  activeIndex,
  setActiveIndex,
  fallback,
  error,
  className,
  ...props
}: Types) => {
  const countries = useMemo(() => {
    return data.map((dd: any, idx: number) => {
      const cardProps = {
        // className: activeIndex === idx ? 'active' : '',
        className: 'snap-start cursor-pointer',
        onClick: (e: React.MouseEvent<HTMLDivElement>) => {
          e.preventDefault()
          setActiveIndex(idx)
        },
      }

      return (
        <Card key={idx} {...cardProps} hoverable>
          <div className="flex items-center">
            <div className="w-7/12">
              <FlagDetails data={dd} />
            </div>
            <div className="w-5/12">
              <Flag data={dd} />
            </div>
          </div>
        </Card>
      )
    })
  }, [data, activeIndex])

  if (error)
    return (
      <div className={cn(className)}>
        <p className="not-found">- {error.message} -</p>
      </div>
    )

  return (
    <div
      className={cn(
        'max-h-[85vh] overflow-y-auto scrollbar snap-y pr-2.5 -mr-2.5',
        className
      )}
      {...props}
    >
      {!data.length ? fallback : countries}
    </div>
  )
}

export default React.memo(Country)
