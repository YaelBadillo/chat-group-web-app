import { useEffect, useState } from 'react'

import { useUserAndChannels } from './useUserAndChannels'
import { useSockets } from '../features/socket'

export const useDashboard = () => {
  const {
    status: requestsStatus,
    value: userAndChannels,
    error,
  } = useUserAndChannels()
  const { connect, disconnect, areConnected } = useSockets()
  const [status, setStatus] = useState<
    'idle' | 'pending' | 'success' | 'error'
  >('idle')

  useEffect(() => {
    connect()
    return () => disconnect()
  }, [])

  useEffect(() => {
    if (areConnected && requestsStatus === 'success') setStatus('success')
    else setStatus(requestsStatus)
  }, [requestsStatus, areConnected])

  return {
    status,
    user: userAndChannels?.user,
    channels: userAndChannels?.channels,
  }
}
