import { useContext } from 'react'

import { Navbar, Sidebar, MainContentContainer } from '../layouts'
import {
  DashboardContext,
  Action,
  Location,
  LocationContainer,
} from '../features/dashboard'
import {
  ChannelsContainer,
  ChannelCard,
  ChannelsPlaceholder,
  SearchChannelContainer,
} from '../features/channel'
import { Form, Input } from '../components/form'
import { UserCard, UserCardPlaceholder } from '../features/user'

export const Channels = () => {
  const { status, user, channels } = useContext(DashboardContext)

  return (
    <>
      <Navbar>
        <LocationContainer>
          <Location location="Channels" />
          <Action icon="add" handleClick={() => {}} />
        </LocationContainer>
      </Navbar>

      <MainContentContainer>
        <Sidebar>
          <SearchChannelContainer>
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
          </SearchChannelContainer>

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
