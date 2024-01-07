'use client'

import cn from 'classnames'
import { Types } from './types'

const Card = ({
  className,
  children,
  loading,
  loader,
  hoverable,
  ...props
}: Types) => {
  const cardProps = {
    className: cn(
      'w-full transition-colors border backdrop-blur-2xl min-h-[96px] rounded-lg p-4',
      hoverable
        ? 'border-transparent hover:border-neutral-800 hover:bg-zinc-800/30'
        : 'bg-zinc-800/30 border-neutral-800',
      className
    ),
    ...props,
  }

  return <div {...cardProps}>{loading ? loader : children}</div>
}

export default Card
