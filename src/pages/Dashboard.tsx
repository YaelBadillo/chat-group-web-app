import { useCallback, useEffect } from 'react'

import { useMatch, useNavigate, Outlet } from 'react-router'

import { DashboardContainer } from '../layouts'
import {
  Action,
  ActionName,
  DashboardContext,
  MainContentContainer,
  Navbar,
  NavbarActionSection,
} from '../features/dashboard'
import { useDashboard } from '../hooks'

export const Dashboard = () => {
  const { status, sockets, user, channels } = useDashboard()
  const match = useMatch('/dashboard/channel/:channelId')
  const navigate = useNavigate()

  useEffect(() => console.log(match), [match])

  const handleBackToDashboard = useCallback(() => navigate('/dashboard'), [])

  return (
    <DashboardContainer>
      <Navbar>
        <NavbarActionSection>
          {match === null ? (
            <>
              <ActionName name="Channels" />
              <Action icon="add" handleClick={() => {}} />
            </>
          ) : (
            <>
              <Action icon="arrow_back" handleClick={handleBackToDashboard} />
              <ActionName name="All channels" />
            </>
          )}
        </NavbarActionSection>
        {match === null ? (
          <></>
        ) : (
          <span className="text-lg font-bold uppercase text-gray-light">
            {
              channels?.filter(({ id }) => id === match.params.channelId)[0]
                .name
            }
          </span>
        )}
      </Navbar>

      <MainContentContainer>
        <DashboardContext.Provider value={{ status, sockets, user, channels }}>
          <Outlet />
        </DashboardContext.Provider>
      </MainContentContainer>
    </DashboardContainer>
  )
}
