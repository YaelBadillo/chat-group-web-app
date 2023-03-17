import { useEffect, useState } from 'react'

import { useUser } from './useUser'
import { useSockets } from '../../socket'

export const useDashboard = () => {
  const { status: requestsStatus, value, error } = useUser()
  const { areSocketsConnected } = useSockets()
  const [status, setStatus] = useState(false)

  useEffect(() => {
    if (requestsStatus === 'success' && areSocketsConnected) setStatus(true)
  }, [requestsStatus, areSocketsConnected])

  return { value, status }
}
