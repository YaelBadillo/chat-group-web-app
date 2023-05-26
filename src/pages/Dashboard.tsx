import { useMatch, Outlet } from 'react-router'

import { DashboardContainer } from '../layouts'
import {
  Action,
  ActionName,
  DashboardContext,
  MainContentContainer,
  Navbar,
  NavbarActionSection,
  Sidebar,
  SidebarMainContentProps,
} from '../features/dashboard'
import { useDashboard } from '../hooks'
import { useEffect } from 'react'
import { Form, Input } from '../components/form'
import {
  ChannelCard,
  ChannelsContainer,
  ChannelsPlaceholder,
} from '../features/channel'
import { UserCard, UserCardPlaceholder } from '../features/user'

export const Dashboard = () => {
  const { status, user, channels } = useDashboard()
  const match = useMatch('/dashboard/channel/:channelId')

  useEffect(() => console.log(match), [match])

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
              <Action icon="arrow_back" handleClick={() => {}} />
              <ActionName name="All channels" />
            </>
          )}
        </NavbarActionSection>
      </Navbar>

      <MainContentContainer>
        <Sidebar>
          <SidebarMainContentProps>
            {match === null ? (
              <>
                <Form handleSubmit={() => {}}>
                  <Input
                    type="text"
                    name="search"
                    placeholder="Search"
                    value=""
                    onChange={() => {}}
                    onBlur={() => {}}
                    startIcon="search"
                    error={false}
                  />
                </Form>

                <ChannelsContainer>
                  {status === 'success' &&
                  channels !== undefined &&
                  channels !== null ? (
                    channels.map(({ id, name }) => (
                      <ChannelCard name={name} id={id} key={id} />
                    ))
                  ) : (
                    <ChannelsPlaceholder />
                  )}
                </ChannelsContainer>
              </>
            ) : (
              <h2>hola</h2>
            )}
          </SidebarMainContentProps>

          {status ? (
            <UserCard
              name={user !== undefined && user !== null ? user.name : ''}
            />
          ) : (
            <UserCardPlaceholder />
          )}
        </Sidebar>

        <DashboardContext.Provider value={{ status, user, channels }}>
          <Outlet />
        </DashboardContext.Provider>
      </MainContentContainer>
    </DashboardContainer>
  )
}
