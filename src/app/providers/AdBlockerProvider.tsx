'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { AdBlockerContextProps } from './types'

const AdBlockerContext = createContext<AdBlockerContextProps>({
  adBlockDetected: false,
})
export const useAdBlockerContext = () => useContext(AdBlockerContext)

export function AdBlockerProvider({ ...props }: any) {
  const [adBlockDetected, setAdBlockDetected] = useState(false)

  const checkAdBlockerCallback = useCallback(() => {
    // Create a dummy ad element
    const adTest = document.createElement('div')
    adTest.innerHTML = '&nbsp;'
    adTest.className = 'adsbygoogle'
    adTest.style.cssText = 'display:inline-block;width:1px;height:1px;'
    document.body.appendChild(adTest)

    // Check if ad element is blocked
    if (adTest.offsetHeight === 0 || adTest.offsetWidth === 0) {
      setAdBlockDetected(true)
    }
    // Remove the test element
    document.body.removeChild(adTest)
  }, [setAdBlockDetected])

  useEffect(() => {
    checkAdBlockerCallback()
  }, [checkAdBlockerCallback])

  const contextValues = useMemo(() => ({ adBlockDetected }), [adBlockDetected])

  return <AdBlockerContext.Provider value={contextValues} {...props} />
}
