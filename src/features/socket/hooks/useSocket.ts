import { useEffect, useState } from 'react'

import { Socket } from 'socket.io-client'

export const useSocket = (
  socket: Socket,
  socketEvents?: { event: string; callback: () => void }[]
) => {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [events, _] = useState(socketEvents)

  useEffect(() => {
    const onConnect = () => {
      setIsConnected(true)
    }
    const onDisconnect = () => {
      setIsConnected(false)
    }

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    if (events) {
      events.forEach(({ event, callback }) => {
        socket.on(event, callback)
      })
    }

    return () => {
      socket.off('connect', onConnect)
      socket.off('disconnect', onDisconnect)
      if (events) {
        events.forEach(({ event, callback }) => {
          socket.off(event, callback)
        })
      }
    }
  }, [events])

  return { isConnected, connect: socket.connect, disconnect: socket.disconnect }
}
