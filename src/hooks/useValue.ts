'use client'

import { useEffect, useState } from 'react'

interface Options {
  transform?: (data: any) => any
  forward?: (data: any) => any
}

const useValue = <T>(state: T, options?: Options) => {
  const [value, _setValue] = useState<T>(state)

  const setValue = (_value: T) => {
    if (options?.transform) {
      _value = options?.transform(_value)
    }

    if (options?.forward) {
      options?.forward(_value)
    }

    _setValue(_value)
  }

  useEffect(() => {
    setValue(state)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return [value, setValue] as const
}

export default useValue
