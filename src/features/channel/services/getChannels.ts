import { fetchData } from '../../../lib'
import { ChannelResponse } from '../types'

export const getChannels: () => Promise<ChannelResponse[] | void> = () => {
  const body = {}
  const withCredentials = true
  return fetchData<ChannelResponse[]>(
    'http://localhost:3000/channel',
    'get',
    body,
    withCredentials
  )
}
