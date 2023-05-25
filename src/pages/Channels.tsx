import { useContext } from 'react'

import {
  Navbar,
  Sidebar,
  MainContentContainer,
  SidebarMainContentProps,
} from '../features/dashboard'
import {
  DashboardContext,
  Action,
  Location,
  NavbarActionSection
} from '../features/dashboard'
import {
  ChannelsContainer,
  ChannelCard,
  ChannelsPlaceholder,
} from '../features/channel'
import { Form, Input } from '../components/form'
import { UserCard, UserCardPlaceholder } from '../features/user'

export const Channels = () => {
  const { status, user, channels } = useContext(DashboardContext)

  return (
    <>
      <Navbar>
        <NavbarActionSection>
          <Location location="Channels" />
          <Action icon="add" handleClick={() => {}} />
        </NavbarActionSection>
      </Navbar>

      <MainContentContainer>
        <Sidebar>
          <SidebarMainContentProps>
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
          </SidebarMainContentProps>

          {status ? (
            <UserCard
              name={user !== undefined && user !== null ? user.name : ''}
            />
          ) : (
            <UserCardPlaceholder />
          )}
        </Sidebar>
      </MainContentContainer>
    </>
  )
}
