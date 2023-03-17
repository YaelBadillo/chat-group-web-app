import { useState, useEffect } from 'react'

import { useSocket } from './useSocket'

export const useSockets = () => {
  const channelSocket = useSocket('http://localhost:3000/channel')
  const memberSocket = useSocket('http://localhost:3000/member')
  const messageSocket = useSocket('http://localhost:3000/message')

  const [areSocketsConnected, setAreSocketsConnected] = useState(false)

  useEffect(() => {
    const areConnected =
      channelSocket.isConnected &&
      memberSocket.isConnected &&
      messageSocket.isConnected
    if (areConnected) setAreSocketsConnected(true)
  }, [
    channelSocket.isConnected,
    memberSocket.isConnected,
    messageSocket.isConnected,
  ])

  useEffect(() => {
    channelSocket.connect()
    memberSocket.connect()
    messageSocket.connect()

    return () => {
      channelSocket.disconnect()
      memberSocket.disconnect()
      messageSocket.disconnect()
    }
  }, [])

  return { areSocketsConnected }
}
