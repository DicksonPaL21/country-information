import { forwardRef } from 'react'
import { Types } from './types'

const Ads = forwardRef<HTMLDivElement, Types>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-5215573300733761"
          data-ad-slot="9223603189"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    )
  }
)

Ads.displayName = 'Ads'

export default Ads
