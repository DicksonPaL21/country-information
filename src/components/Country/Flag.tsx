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
    priority: true,
  }

  return <Image alt={data.name.common} {...flagProps} />
}

export default Flag
