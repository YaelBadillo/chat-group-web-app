import { useContext, useEffect } from 'react'

import { useParams } from 'react-router-dom'

import {
  DashboardContext,
  Sidebar,
  SidebarCards,
  SidebarMainContentProps,
} from '../features/dashboard'
import { TextMessage, InputTextMessage } from '../features/chat'
import {
  ChannelDescription,
  ChannelDescriptionPlaceholder,
  ChannelInfo,
  ChannelName,
  ChannelNamePlaceholder,
  ChannelsPlaceholder,
} from '../features/channel'
import { MemberCard, MemberCardPlaceholder } from '../features/member'
import { UserCard, UserCardPlaceholder } from '../features/user'
import { useChannelMembers } from '../features/member'
import pet from '../assets/pet.jpg'

export const ChannelChat = () => {
  const { channelId = '' } = useParams()
  const {
    status: dashboardStatus,
    user,
    channels,
  } = useContext(DashboardContext)
  const {
    status: membersStatus,
    value: channelMembers,
    error,
    execute,
  } = useChannelMembers(channelId)

  useEffect(() => {
    //dashboard.sockets?.memberSocket.emit('')
    console.log(':c')
    console.log(membersStatus)
    console.log(channelMembers)
  }, [])

  useEffect(() => {
    execute()
  }, [])

  return (
    <>
      <Sidebar>
        <SidebarMainContentProps>
          <ChannelInfo>
            {membersStatus === 'success' ? (
              <ChannelName>
                {channels?.filter(({ id }) => id === channelId)[0].name}
              </ChannelName>
            ) : (
              <ChannelNamePlaceholder />
            )}
            {membersStatus === 'success' ? (
              <ChannelDescription>
                {channels?.filter(({ id }) => id === channelId)[0].description}
              </ChannelDescription>
            ) : (
              <ChannelDescriptionPlaceholder />
            )}
          </ChannelInfo>
          <span className="text-lg font-bold uppercase text-gray-light">
            Members
          </span>
          <SidebarCards>
            {membersStatus === 'success' && channelMembers !== undefined ? (
              channelMembers.map(({ id, profilePictureKey, name }) => (
                <MemberCard
                  memberImage={profilePictureKey || pet}
                  memberName={name}
                  key={id}
                />
              ))
            ) : (
              <>
                <MemberCardPlaceholder />
                <MemberCardPlaceholder />
                <MemberCardPlaceholder />
                <MemberCardPlaceholder />
                <MemberCardPlaceholder />
              </>
            )}
          </SidebarCards>
        </SidebarMainContentProps>

        {membersStatus === 'success' ? (
          <UserCard
            name={user !== undefined && user !== null ? user.name : ''}
          />
        ) : (
          <UserCardPlaceholder />
        )}
      </Sidebar>

      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col-reverse gap-y-9 overflow-y-scroll px-20 py-12">
          <TextMessage
            userImage={pet}
            userName="Lorem ipsum"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            consequuntur blanditiis. Unde blanditiis qui odit tempora, quod amet
            temporibus est!"
            sentDate={new Date()}
          />
          <TextMessage
            userImage={pet}
            userName="Lorem ipsum"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            consequuntur blanditiis. Unde blanditiis qui odit tempora, quod amet
            temporibus est!"
            sentDate={new Date()}
            own
          />
        </div>
        <div className="flex flex-row px-20 py-10">
          <InputTextMessage />
        </div>
      </div>
    </>
  )
}
