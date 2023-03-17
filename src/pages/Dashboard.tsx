import { useEffect } from 'react'

import { Form, Input } from '../components/form'
import { DashboardContainer, Sidebar } from '../layouts'
import {
  ChannelCard,
  ChannelsContainer,
  ChannelsPlaceholder,
  SearchChannelContainer,
} from '../features/channels'
import { UserCard, UserCardPlaceholder } from '../features/user'
import {
  Action,
  Location,
  LocationContainer,
  useDashboard,
} from '../features/dashboard'

const Dashboard = () => {
  const { value, status } = useDashboard()

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
            {status && value?.channels !== undefined ? (
              value.channels.map(({ id, name }) => (
                <ChannelCard name={name} key={id} />
              ))
            ) : (
              <ChannelsPlaceholder />
            )}
          </ChannelsContainer>
        </SearchChannelContainer>

        {status ? (
          <UserCard name={value?.user !== undefined ? value.user.name : ''} />
        ) : (
          <UserCardPlaceholder />
        )}
      </Sidebar>
    </DashboardContainer>
  )
}

export default Dashboard
