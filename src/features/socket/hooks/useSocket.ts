import { useCallback, useEffect, useState } from 'react'

import { io } from 'socket.io-client'
import { useSetEvents } from './useSetEvents'

export const useSocket = (
  url: string,
  socketEvents?: { event: string; callback: () => void }[]
) => {
  const socket = io(url, { withCredentials: true, autoConnect: false })
  const [isConnected, setIsConnected] = useState(socket.connected)

  const connect = useCallback(() => socket.connect(), [])
  const disconnect = useCallback(() => socket.disconnect(), [])

  const onConnect = useCallback(() => setIsConnected(true), [])
  const onDisconnect = useCallback(() => setIsConnected(false), [])

  const { areAllEventsConfigured } = useSetEvents(
    socket,
    onConnect,
    onDisconnect,
    socketEvents
  )

  return { socket, isConnected, connect, disconnect, areAllEventsConfigured }
}
