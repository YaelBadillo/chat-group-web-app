import axios, { AxiosError, AxiosResponse } from 'axios'

import { Method, ErrorResponse } from './fetch-data.types'

export const fetchData = async <T, D = {}>(
  url: string,
  method: Method,
  body: D,
  withCredentials: boolean
): Promise<T | void> => {
  try {
    const response = await axios<T, AxiosResponse<T, D>, D>(
      url,
      {
        data: body,
        method,
        withCredentials,
      }
    )

    return response.data
  } catch (error: unknown) {
    if (error instanceof AxiosError) handleErrors(error)
  }
}

const handleErrors = (error: AxiosError<ErrorResponse>) => {
  if (error.response) throw new Error(error.response?.data.message)

  if (error.request) throw new Error(error.request)

  throw new Error(error.message)
}
