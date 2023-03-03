import { useEffect } from 'react'
import { ChannelBar } from '../components/channel-bar'
import { useFetch } from '../hooks'

const Dashboard = () => {
  const { execute, status, value, error } = useFetch(
    'http://localhost:3000/user',
    'get',
    {},
    true
  )

  useEffect(() => {
    execute()
  }, [])

  return (
    <div className="grid h-full w-full">
      <ChannelBar />
    </div>
  )
}

export default Dashboard
