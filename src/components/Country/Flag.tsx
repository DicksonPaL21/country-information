'use client'

import cn from 'classnames'
import { FlagTypes } from './types'

const Flag = ({ data, className, ...props }: FlagTypes) => {
  const flagProps = {
    className: cn('w-full', className),
    src: data.flags.svg,
    alt: data.name.common,
    ...props,
  }
  return <img {...flagProps} />
}

export default Flag
