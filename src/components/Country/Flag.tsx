import { cn } from '@/utils/formatters/cn'
import Image from 'next/image'
import { FlagTypes } from './types'

const Flag = ({ data, className, ...props }: FlagTypes) => {
  const flagProps = {
    ...props,
    width: 900,
    height: 600,
    className: cn('w-full rounded', className),
    src: data.flags.svg,
    alt: data.name.common,
    priority: true,
  }

  return <Image {...flagProps} />
}

export default Flag
