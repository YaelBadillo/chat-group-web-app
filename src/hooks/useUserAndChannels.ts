import { useAsync } from './useAsync'
import { getUserAndChannels } from '../services'

export const useUserAndChannels = () => {
  const immediate = true
  return useAsync(getUserAndChannels, immediate)
}
