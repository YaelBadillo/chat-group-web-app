import { useContext } from 'react'

import {
  DashboardContext,
  Sidebar,
  SidebarCards,
  SidebarMainContentProps,
} from '../features/dashboard'
import { Form, Input } from '../components/form'
import { ChannelCard, ChannelsPlaceholder } from '../features/channel'
import { UserCard, UserCardPlaceholder } from '../features/user'

export const Channels = () => {
  const { status, user, channels } = useContext(DashboardContext)

  return (
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

        <SidebarCards>
          {status === 'success' && channels !== undefined ? (
            channels.map(({ id, name }) => (
              <ChannelCard name={name} id={id} key={id} />
            ))
          ) : (
            <ChannelsPlaceholder />
          )}
        </SidebarCards>
      </SidebarMainContentProps>

      {status ? (
        <UserCard name={user !== undefined && user !== null ? user.name : ''} />
      ) : (
        <UserCardPlaceholder />
      )}
    </Sidebar>
  )
}
