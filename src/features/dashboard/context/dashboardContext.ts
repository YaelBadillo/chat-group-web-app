import { createContext } from 'react'

import { DashboardContextValue } from '../types'

export const DashboardContext = createContext<DashboardContextValue>({
  status: 'idle',
  sockets: undefined,
  user: undefined,
  channels: undefined,
})
