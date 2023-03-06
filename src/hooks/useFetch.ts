import { fetchData } from '../lib'

import { useAsync } from './useAsync'

type method = 'get' | 'post' | 'patch' | 'delete' | 'update'

export const useFetch = <T, D = {}>(
  url: string,
  method: method,
  body: D,
  withCredentials: boolean = false
) => {
  const immediate: boolean = false
  return useAsync<T | void, Error>(
    () => fetchData<T, D>(url, method, body, withCredentials),
    immediate
  )
}
