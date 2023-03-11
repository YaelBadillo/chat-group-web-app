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
import { useUser } from '../features/dashboard'

const Dashboard = () => {
  const { status, value, error } = useUser()

  useEffect(() => {
    if (status === 'success') {
      console.log(value)
    }
  }, [status])

  return (
    <DashboardContainer>
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
            {status === 'success' && value?.channels !== undefined ? (
              value.channels.map(({ id, name }) => (
                <ChannelCard name={name} key={id} />
              ))
            ) : (
              <ChannelsPlaceholder />
            )}
          </ChannelsContainer>
        </SearchChannelContainer>

        {status === 'success' ? (
          <UserCard name={value?.user !== undefined ? value.user.name : ''} />
        ) : (
          <UserCardPlaceholder />
        )}
      </Sidebar>
    </DashboardContainer>
  )
}

export default Dashboard
