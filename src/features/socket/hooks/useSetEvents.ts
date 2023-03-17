import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'

export const useSetEvents = (
  socket: Socket,
  onConnect: () => void,
  onDisconnect: () => void,
  socketEvents?: { event: string; callback: () => void }[]
) => {
  const [events, _] = useState(socketEvents)
  const [areAllEventsConfigured, setAreAllEventsConfigured] = useState(false)

  useEffect(() => {
    setAreAllEventsConfigured(false)

    socket.on('connect', onConnect)
    socket.on('disconnect', onDisconnect)
    if (events) {
      events.forEach(({ event, callback }) => {
        socket.on(event, callback)
      })
    }

    setAreAllEventsConfigured(true)

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

  return { areAllEventsConfigured }
}
