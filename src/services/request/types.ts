export type SuccessResponseType = {
  [key: string]: any
}

export type SuccessCallbackFn = (data: SuccessResponseType) => void

export type ErrorResponseType = {
  [key: string]: any
}

export type ErrorCallbackFn = (data: ErrorResponseType) => void
