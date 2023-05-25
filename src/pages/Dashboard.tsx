import { useMatch, Outlet } from 'react-router'

import { DashboardContainer, Navbar } from '../layouts'
import {
  Action,
  DashboardContext,
  Location,
  LocationContainer,
} from '../features/dashboard'
import { useDashboard } from '../hooks'
import { useEffect } from 'react'

export const Dashboard = () => {
  const { status, user, channels } = useDashboard()
  const match = useMatch('channel/')

  useEffect(() => console.log(match), [match])

  return (
    <DashboardContainer>
      <DashboardContext.Provider value={{ status, user, channels }}>
        <Outlet />
      </DashboardContext.Provider>
    </DashboardContainer>
  )
}
