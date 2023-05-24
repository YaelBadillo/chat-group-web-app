import { createContext } from 'react'

import { DashboardContextValue } from '../types'

export const DashboardContext = createContext<
  DashboardContextValue | undefined
>(undefined)
