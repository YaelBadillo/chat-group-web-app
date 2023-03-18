import { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { ChannelChatContainer } from '../features/channel'

export const ChannelChat = () => {
  const { channelId } = useParams()

  useEffect(() => console.log(channelId), [])
  return (
    <ChannelChatContainer>
      <div className="py-5 px-16 shadow-line">
        <h2 className="text-lg font-bold leading-6 text-white">Channel name</h2>
      </div>
    </ChannelChatContainer>
  )
}
