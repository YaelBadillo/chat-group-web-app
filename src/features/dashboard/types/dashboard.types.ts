import { Socket } from 'socket.io-client'

import { UserResponse } from '../../user'
import { ChannelResponse } from '../../channel'

export interface DashboardContextValue {
  status: 'success' | 'error' | 'idle' | 'pending'
  sockets:
    | { channelSocket: Socket; memberSocket: Socket; messageSocket: Socket }
    | undefined
  user: UserResponse | undefined
  channels: ChannelResponse[] | undefined
}
