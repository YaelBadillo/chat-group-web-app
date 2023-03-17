import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const ChannelContainer = () => {
  const { channelId } = useParams()

  useEffect(() => console.log(channelId), [])
  return (
    <div className="h-full w-full">
      <div className="py-5 px-16 shadow-line">
        <h2 className="text-lg font-bold leading-6 text-white">Channel name</h2>
      </div>
    </div>
  )
}
