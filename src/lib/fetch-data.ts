import axios, { AxiosResponse } from 'axios'

type method = 'get' | 'post' | 'patch' | 'delete' | 'update'

export const fetchData = async <T, D = {}>(
  url: string,
  method: method,
  body: D
): Promise<T> => {
  const response: AxiosResponse<T> = await axios<T, AxiosResponse<T, D>, D>(
    url,
    {
      data: body,
      method,
    }
  )
  if (response.status !== 200 && response.status !== 201)
    throw new Error(response.statusText)

  return response.data
}
