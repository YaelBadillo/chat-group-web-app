import { useContext, useEffect } from 'react'

import { useLocation, useParams } from 'react-router-dom'

import { ChannelChatContainer } from '../features/channel'
import { DashboardContext } from '../features/dashboard'

export const ChannelChat = () => {
  const { channelId } = useParams()
  const location = useLocation()
  const dashboard = useContext(DashboardContext)

  useEffect(() => console.log(location), [])
  return (
    <ChannelChatContainer>
      <div className="py-5 px-16 shadow-line">
        <h2 className="text-lg font-bold leading-6 text-white">Channel name</h2>
      </div>
    </ChannelChatContainer>
  )
}
