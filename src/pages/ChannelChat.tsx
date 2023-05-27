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
    <div className="flex flex-1 flex-col">
      <div className="flex-1"></div>
      <div className="flex flex-row px-20 py-10">
        <form
          action=""
          className="flex flex-1 items-center rounded-lg bg-tertiary p-2"
        >
          <label htmlFor="" className="flex flex-1 px-3">
            <textarea
              placeholder="Type a message here"
              rows={1}
              className="flex-1 resize-none bg-transparent text-gray-light outline-none"
            ></textarea>
          </label>
          <button className="flex h-max w-max rounded-lg bg-send-button-color p-2 text-white">
            <span className="material-icons">send</span>
          </button>
        </form>
      </div>
    </div>
  )
}
