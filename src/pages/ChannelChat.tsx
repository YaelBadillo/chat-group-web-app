import { useContext, useEffect } from 'react'

import { useLocation, useParams } from 'react-router-dom'

import { ChannelChatContainer } from '../features/channel'
import { DashboardContext } from '../features/dashboard'

export const ChannelChat = () => {
  const { channelId } = useParams()
  const location = useLocation()
  const dashboard = useContext(DashboardContext)

  useEffect(() => console.log(location), [])
  return <ChannelChatContainer></ChannelChatContainer>
}
