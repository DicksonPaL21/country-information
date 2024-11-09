'use client'

import { useEffect, useRef, useState } from 'react'

const useAdContentCheck = () => {
  const [hasContent, setHasContent] = useState<boolean>(false)
  const adRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const checkAdContent = (mutationsList: MutationRecord[]) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const adElement = mutation.target as HTMLElement
          // Check if the ad element has any content
          if (adElement.querySelector('iframe')) {
            setHasContent(true)
            return
          }
        }
      }
    }

    const observer = new MutationObserver(checkAdContent)

    if (adRef.current) {
      observer.observe(adRef.current, { childList: true, subtree: true })
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return { adRef, hasContent }
}

export default useAdContentCheck
