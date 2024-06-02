import {
  ErrorCallbackFn,
  ErrorResponseType,
  SuccessCallbackFn,
  SuccessResponseType,
} from './types'

export async function GET({
  url,
  query = '',
  onSuccess,
  onError,
  onFetching,
}: {
  url: string
  query?: string
  onSuccess?: SuccessCallbackFn
  onError?: ErrorCallbackFn
  onFetching?: (state: boolean) => void
}): Promise<any> {
  try {
    onFetching?.(true)
    const BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_END_POINT
    const response = await fetch(`${BASE_URL}/${url}?${query}`)
    onFetching?.(false)

    const data = await response.json()

    if (response.ok) {
      onSuccess?.(data as SuccessResponseType)
    } else onError?.(data as ErrorResponseType)
  } catch (error) {
    onError?.(error as ErrorResponseType)
    onFetching?.(false)
  }
}

export async function POST({
  url,
  data,
}: {
  url: string
  data: { [key: string]: any }
}): Promise<Response> {
  const BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_END_POINT
  const response = await fetch(`${BASE_URL}/${url}`, {
    method: 'POST',
    body: JSON.stringify({ data }),
  })

  return response
}
