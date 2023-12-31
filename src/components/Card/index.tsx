'use client'

import cn from 'classnames'
import { Types } from './types'

const Card = ({ className, children, loading, loader, ...props }: Types) => {
  const cardProps = {
    className: cn(
      'w-full bg-zinc-800/30 border border-neutral-800 backdrop-blur-2xl min-h-[96px] rounded-lg p-4',
      className
    ),
    ...props,
  }

  return <div {...cardProps}>{loading ? loader : children}</div>
}

export default Card
