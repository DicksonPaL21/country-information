import useAdContentCheck from '@/hooks/useAdContentCheck'
import { forwardRef, useEffect } from 'react'
import { mergeRefs } from 'react-merge-refs'
import { Types } from './types'
import withAdBlockerDetection from './withAdBlockerDetection'

const Ads = forwardRef<HTMLDivElement, Types>(
  ({ className, ...props }, ref) => {
    const { adRef, hasContent } = useAdContentCheck()

    useEffect(() => {
      const initializeAds = () => {
        if (window) {
          try {
            window.adsbygoogle = window.adsbygoogle || []
            window.adsbygoogle.push({})
          } catch (e) {
            console.error('Error initializing ads', e)
          }
        }
      }

      if (adRef.current) {
        // Clear previous ad content
        adRef.current.innerHTML = ''

        // Create a new ad element
        const ad = document.createElement('ins')
        ad.className = 'adsbygoogle'
        ad.style.display = 'block'
        ad.setAttribute('data-ad-client', 'ca-pub-5215573300733761')
        ad.setAttribute('data-ad-slot', '9223603189')
        ad.setAttribute('data-ad-format', 'auto')
        ad.setAttribute('data-full-width-responsive', 'true')

        // Append ad to the ref container
        adRef.current.appendChild(ad)
        initializeAds()
      }
    }, [adRef])

    return (
      <div
        ref={mergeRefs([adRef, ref])}
        className={hasContent ? className : ''}
        {...props}
      />
    )
  }
)

Ads.displayName = 'Ads'

export default withAdBlockerDetection(Ads)
