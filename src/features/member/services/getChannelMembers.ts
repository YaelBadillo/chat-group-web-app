import { fetchData } from '../../../lib'
import { UserResponse } from '../types'

export const getChannelMembers = (channelId: string) => {
  const body = {}
  const withCredentials = true
  return fetchData<UserResponse[]>(
    `http://localhost:3000/user/channel-users/${channelId}`,
    'get',
    body,
    withCredentials
  )
}
