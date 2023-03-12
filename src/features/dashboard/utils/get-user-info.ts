import { fetchData } from '../../../lib'
import { ChannelResponse, UserInfo, UserResponse } from '../types'

export const getUserInfo: () => Promise<UserInfo> = () => {
  const body = {}
  const withCredentials = true
  return Promise.all([
    fetchData<UserResponse>(
      'http://localhost:3000/user',
      'get',
      body,
      withCredentials
    ),
    fetchData<ChannelResponse[]>(
      'http://localhost:3000/channel',
      'get',
      body,
      withCredentials
    ),
  ]).then<UserInfo>((response) => {
    const userInfo: UserInfo = {}

    if (response[0] !== null && response[0] !== undefined) {
      userInfo.user = response[0]
    }

    if (response[1] !== null && response[1] !== undefined) {
      userInfo.channels = response[1]
    }

    return userInfo
  })
}
