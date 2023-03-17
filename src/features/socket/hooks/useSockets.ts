import { useState, useEffect, useCallback } from 'react'

import { useSocket } from './useSocket'

export const useSockets = () => {
  const channelSocket = useSocket('http://localhost:3000/channel')
  const memberSocket = useSocket('http://localhost:3000/member')
  const messageSocket = useSocket('http://localhost:3000/message')

  const [areConnected, setAreConnected] = useState(false)

  const connect = useCallback(() => {
    channelSocket.connect()
    memberSocket.connect()
    messageSocket.connect()
  }, [])

  const disconnect = useCallback(() => {
    channelSocket.disconnect()
    memberSocket.disconnect()
    messageSocket.disconnect()
  }, [])

  useEffect(() => {
    const areConnected =
      channelSocket.isConnected &&
      memberSocket.isConnected &&
      messageSocket.isConnected
    if (areConnected) setAreConnected(true)
  }, [
    channelSocket.isConnected,
    memberSocket.isConnected,
    messageSocket.isConnected,
  ])

  return { connect, disconnect, areConnected }
}
