import { UserResponse } from '../../user'
import { ChannelResponse } from '../../channel'

export interface DashboardContextValue {
  user: UserResponse | null | undefined
  channels: ChannelResponse[] | null | undefined
  status: 'success' | 'error' | 'idle' | 'pending'
}
