import { CountryTypes } from '@/components/Country/types'

export type SuccessResponseType = CountryTypes[] & {}

export type SuccessCallbackFn = (data: SuccessResponseType) => void

export type ErrorResponseType = {
  [key: string]: any
}

export type ErrorCallbackFn = (data: ErrorResponseType) => void
