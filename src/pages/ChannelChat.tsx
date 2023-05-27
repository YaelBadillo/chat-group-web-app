import { useContext, useEffect } from 'react'

import { useLocation, useParams } from 'react-router-dom'

import { DashboardContext } from '../features/dashboard'
import pet from '../assets/pet.jpg'
import { TextMessage, InputTextMessage } from '../features/chat'

export const ChannelChat = () => {
  const { channelId } = useParams()
  const location = useLocation()
  const dashboard = useContext(DashboardContext)

  useEffect(() => console.log(location), [])

  return (
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
  )
}
