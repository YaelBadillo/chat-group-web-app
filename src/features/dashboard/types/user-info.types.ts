import { ChannelResponse } from './channel-response.types'
import { UserResponse } from './user-response.types'

export interface UserInfo {
  user?: UserResponse
  channels?: ChannelResponse[]
}
