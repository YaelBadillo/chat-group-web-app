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
  SidebarCards,
  SidebarMainContentProps,
} from '../features/dashboard'
import { useDashboard } from '../hooks'
import { useEffect } from 'react'
import { Form, Input } from '../components/form'
import {
  ChannelCard,
  ChannelDescription,
  ChannelInfo,
  ChannelName,
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

                <SidebarCards>
                  {status === 'success' &&
                  channels !== undefined &&
                  channels !== null ? (
                    channels.map(({ id, name }) => (
                      <ChannelCard name={name} id={id} key={id} />
                    ))
                  ) : (
                    <ChannelsPlaceholder />
                  )}
                </SidebarCards>
              </>
            ) : (
              <>
                <ChannelInfo>
                  <ChannelName>ChannelName</ChannelName>
                  <ChannelDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis id quo ea reiciendis cupiditate expedita hic. Sint
                    neque modi, suscipit atque porro, amet reiciendis
                    repudiandae nihil necessitatibus officiis hic ut.
                  </ChannelDescription>
                </ChannelInfo>
                <span className="text-lg font-bold uppercase text-gray-light">
                  Members
                </span>
                <SidebarCards></SidebarCards>
              </>
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
