import { fetchData } from '../../../lib'

interface ChannelResponse {
  createdAt: string
  updatedAt: string
  id: string
  name: string
  space: string
  description: string
  ownerId: string
  createdBy: string
  updatedBy: string
}

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
