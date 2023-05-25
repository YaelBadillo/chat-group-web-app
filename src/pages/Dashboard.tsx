import { useMatch, Outlet } from 'react-router'

import { DashboardContainer } from '../layouts'
import { DashboardContext } from '../features/dashboard'
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
