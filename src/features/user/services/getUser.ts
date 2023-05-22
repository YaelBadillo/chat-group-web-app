import { fetchData } from '../../../lib'

interface UserResponse {
  id: string
  name: string
  state?: any
  profilePictureKey?: any
  createdAt: string
  updatedAt: string
}

export const getUser: () => Promise<UserResponse | void> = () => {
  const body = {}
  const withCredentials = true
  return fetchData<UserResponse>(
    'http://localhost:3000/user',
    'get',
    body,
    withCredentials
  )
}
