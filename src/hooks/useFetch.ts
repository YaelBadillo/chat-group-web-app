import axios, { AxiosRequestConfig } from 'axios'

import { useAsync } from './useAsync'

export const useFetch = <T = {}>(url: string, config?: AxiosRequestConfig<T>) => {
  const immediate: boolean = false
  return useAsync(
    () => axios(url, config).then((response) => response.data),
    immediate
  )
}
