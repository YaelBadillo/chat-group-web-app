import { fetchData } from '../lib'

import { useAsync } from './useAsync'

type method = 'get' | 'post' | 'patch' | 'delete' | 'update'

export const useFetch = <T, D = {}>(url: string, method: method, body: D) => {
  const immediate: boolean = false
  return useAsync(
    () => fetchData<T, D>(url, method, body).then((data) => data),
    immediate
  )
}
