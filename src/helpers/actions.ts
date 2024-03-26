'use client'

import * as req from '../services/request'
import type {
  SuccessCallbackFn,
  ErrorCallbackFn,
} from '../services/request/types'

export const getCountries = (
  onSuccess: SuccessCallbackFn,
  onError: ErrorCallbackFn,
  query?: string
) => {
  req.GET({
    url: 'all',
    query,
    onSuccess,
    onError,
  })
}

export const getCountryByName = (
  name: string,
  onSuccess: SuccessCallbackFn,
  onError: ErrorCallbackFn
) => {
  req.GET({
    url: `name/${name}`,
    onSuccess,
    onError,
  })
}
