'use client'

import { useEffect, useCallback, DependencyList } from 'react'

export const useDebouncedEffect = (
  effect: Function,
  delay: number = 1000,
  deps: DependencyList = []
): void => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(effect, deps)

  useEffect(() => {
    const handler = setTimeout(() => callback(), delay)
    return () => clearTimeout(handler)
  }, [callback, delay])
}
