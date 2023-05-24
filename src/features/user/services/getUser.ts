import { fetchData } from '../../../lib'
import { UserResponse } from '../types'

export const getUser = () => {
  const body = {}
  const withCredentials = true
  return fetchData<UserResponse>(
    'http://localhost:3000/user',
    'get',
    body,
    withCredentials
  )
}
