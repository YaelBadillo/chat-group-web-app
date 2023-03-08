import { useEffect } from 'react'

import { useFetch } from '../hooks'

const Dashboard = () => {
  const { execute, status, value, error } = useFetch(
    'http://localhost:3000/user',
    'get',
    {},
    true
  )
  const {
    execute: executeTwo,
    status: statusTwo,
    value: valueTwo,
    error: errorTwo,
  } = useFetch('http://localhost:3000/channel', 'get', {}, true)

  useEffect(() => {
    execute()
    executeTwo()
  }, [])

  useEffect(() => {
    if (status === 'success' && statusTwo === 'success') {
      console.log(value)
      console.log(valueTwo)
    }
  }, [status])

  return (
    <div className="grid h-full w-full bg-primary">
    </div>
  )
}

export default Dashboard
