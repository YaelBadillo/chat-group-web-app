import { useAsync } from '../../../hooks'
import { getChannelMembers } from '../services'

export const useChannelMembers = (channelId: string) => {
  const immediate = false 
  return useAsync(() => getChannelMembers(channelId), immediate)
}
