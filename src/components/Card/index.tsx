import { cn } from '@/utils/formatters/cn'
import { forwardRef } from 'react'
import { Types } from './types'

const Card = forwardRef<HTMLDivElement, Types>(
  ({ className, children, loading, loader, hoverable, ...props }, ref) => {
    const cardProps = {
      className: cn(
        'w-full transition-colors border backdrop-blur-2xl min-h-[96px] rounded-lg p-4',
        hoverable
          ? 'border-transparent hover:border-neutral-800 hover:bg-zinc-800/30'
          : 'bg-zinc-800/30 border-neutral-800',
        className
      ),
      ...props,
      ref,
    }

    return <div {...cardProps}>{loading ? loader : children}</div>
  }
)

Card.displayName = 'Card'

export default Card
