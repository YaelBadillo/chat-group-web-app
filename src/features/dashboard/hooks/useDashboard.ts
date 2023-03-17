import { useEffect, useState } from 'react'

import { useUser } from './useUser'
import { useSockets } from '../../socket'

export const useDashboard = () => {
  const { status: requestsStatus, value: userInfo, error } = useUser()
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

  return { status, userInfo }
}
