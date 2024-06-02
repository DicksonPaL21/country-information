'use client'

import * as req from '../services/request'
import type {
  ErrorCallbackFn,
  SuccessCallbackFn,
} from '../services/request/types'

export const getCountries = (
  onSuccess: SuccessCallbackFn,
  onError: ErrorCallbackFn,
  onFetching?: (state: boolean) => void,
  query?: string
) => {
  req.GET({
    url: 'all',
    query,
    onSuccess,
    onError,
    onFetching,
  })
}

export const getCountryByName = (
  name: string,
  onSuccess: SuccessCallbackFn,
  onError: ErrorCallbackFn,
  onFetching?: (state: boolean) => void,
  query?: string
) => {
  req.GET({
    url: `name/${name}`,
    query,
    onSuccess,
    onError,
    onFetching,
  })
}
