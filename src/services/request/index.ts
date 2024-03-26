import {
  ErrorCallbackFn,
  ErrorResponseType,
  SuccessCallbackFn,
  SuccessResponseType,
} from './types'

export async function GET({
  url,
  query,
  onSuccess,
  onError,
}: {
  url: string
  query?: string
  onSuccess?: SuccessCallbackFn
  onError?: ErrorCallbackFn
}): Promise<any> {
  try {
    const BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_END_POINT
    const response = await fetch(`${BASE_URL}/${url}?${query}`)

    const data = await response.json()

    onSuccess?.(data as SuccessResponseType)
  } catch (error) {
    onError?.(error as ErrorResponseType)
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
