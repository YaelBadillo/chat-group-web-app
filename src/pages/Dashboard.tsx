import { Outlet } from 'react-router'

import { Form, Input } from '../components/form'
import { DashboardContainer, Sidebar } from '../layouts'
import {
  ChannelCard,
  ChannelsContainer,
  ChannelsPlaceholder,
  SearchChannelContainer,
} from '../features/channel'
import { UserCard, UserCardPlaceholder } from '../features/user'
import {
  Action,
  Location,
  LocationContainer,
  DashboardContext,
} from '../features/dashboard'
import { useDashboard } from '../hooks'

export const Dashboard = () => {
  const { status, user, channels } = useDashboard()

  return (
    <DashboardContainer>
      <Sidebar>
        <LocationContainer>
          <Location location="Channels" />
          <Action icon="add" handleClick={() => {}} />
        </LocationContainer>
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

      <DashboardContext.Provider value={{ status, user, channels }}>
        <Outlet />
      </DashboardContext.Provider>
    </DashboardContainer>
  )
}
