import { useState, useEffect } from 'react'

import { sockets } from '../sockets'
import { useSocket } from './useSocket'

export const useSockets = () => {
  const {
    isConnected: isChannelConnected,
    connect: connectChannel,
    disconnect: disconnectChannel,
  } = useSocket(sockets.channel)
  const {
    isConnected: isMemberConnected,
    connect: connectMember,
    disconnect: disconnectMember,
  } = useSocket(sockets.member)
  const {
    isConnected: isMessageConnected,
    connect: connectMessage,
    disconnect: disconnectMessage,
  } = useSocket(sockets.message)

  /* 
  const [areConnected, setAreConnected] = useState(
    isChannelConnected && isMemberConnected && isMessageConnected
  )
  */

  useEffect(() => {
    connectChannel()
    connectMember()
    connectMessage()

    return () => {
      disconnectChannel()
      disconnectMember()
      disconnectMessage()
    }
  }, [])

  return { isChannelConnected, isMemberConnected, isMessageConnected }
}
