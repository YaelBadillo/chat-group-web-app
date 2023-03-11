import { useEffect } from 'react'

import { useFetch } from '../hooks'
import { Form, Input } from '../components/form'
import { DashboardContainer, Sidebar } from '../layouts'
import {
  ChannelCard,
  ChannelsContainer,
  ChannelsPlaceholder,
  SearchChannelContainer,
} from '../features/channels'
import { UserCard, UserCardPlaceholder } from '../features/user'

const Dashboard = () => {
  const { execute, status, value, error } = useFetch(
    'http://localhost:3000/user',
    'get',
    {},
    true
  )
  const {
    execute: executeTwo,
    status: statusTwo,
    value: valueTwo,
    error: errorTwo,
  } = useFetch('http://localhost:3000/channel', 'get', {}, true)

  useEffect(() => {
    Promise.all([execute(), executeTwo()])
  }, [])

  useEffect(() => {
    if (status === 'success' && statusTwo === 'success') {
      console.log(value)
      console.log(valueTwo)
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
            {status === 'success' && statusTwo === 'success' ? (
              <>
                <ChannelCard />
                <ChannelCard />
                <ChannelCard />
              </>
            ) : (
              <ChannelsPlaceholder />
            )}
          </ChannelsContainer>
        </SearchChannelContainer>

        {status === 'success' && statusTwo === 'success' ? (
          <UserCard name="Yael" />
        ) : (
          <UserCardPlaceholder />
        )}
      </Sidebar>
    </DashboardContainer>
  )
}

export default Dashboard
