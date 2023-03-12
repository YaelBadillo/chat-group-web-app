import { useAsync } from '../../../hooks'
import { getUserInfo } from '../utils'

export const useUser = () => {
  const immediate = true
  return useAsync(getUserInfo, immediate)
}
