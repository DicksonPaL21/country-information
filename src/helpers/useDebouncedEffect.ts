'use client'

import { useEffect, useCallback, DependencyList } from 'react'

export const useDebouncedEffect = (
  effect: Function,
  delay: number = 1000,
  deps: DependencyList = []
): void => {
  const callback = useCallback(effect, deps)

  useEffect(() => {
    const handler = setTimeout(() => callback(), delay)
    return () => clearTimeout(handler)
  }, [callback, delay])
}
