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
  Sidebar,
  SidebarCards,
  SidebarMainContentProps,
} from '../features/dashboard'
import { useDashboard } from '../hooks'
import { Form, Input } from '../components/form'
import {
  ChannelCard,
  ChannelDescription,
  ChannelInfo,
  ChannelName,
  ChannelsPlaceholder,
} from '../features/channel'
import { UserCard, UserCardPlaceholder } from '../features/user'
import pet from '../assets/pet.jpg'

export const Dashboard = () => {
  const { status, user, channels } = useDashboard()
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
                <SidebarCards>
                  <button className="flex h-max w-full cursor-pointer items-center gap-x-3 rounded-lg p-1 hover:bg-channel-card-hover">
                    <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
                      <img src={pet} alt="" className="h-full w-auto" />
                    </div>
                    <span className="text-lg font-bold text-gray-dark">
                      Lorem, ipsum.
                    </span>
                  </button>

                  <button className="flex h-max w-full cursor-pointer items-center gap-x-3 rounded-lg p-1 hover:bg-channel-card-hover">
                    <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
                      <img src={pet} alt="" className="h-full w-auto" />
                    </div>
                    <span className="text-lg font-bold text-gray-dark">
                      Lorem, ipsum dolor.
                    </span>
                  </button>

                  <button className="flex h-max w-full cursor-pointer items-center gap-x-3 rounded-lg p-1 hover:bg-channel-card-hover">
                    <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
                      <img src={pet} alt="" className="h-full w-auto" />
                    </div>
                    <span className="text-lg font-bold text-gray-dark">
                      Lorem
                    </span>
                  </button>
                </SidebarCards>
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
