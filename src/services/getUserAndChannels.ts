import { getChannels } from '../features/channel'
import { getUser } from '../features/user'

export const getUserAndChannels = () => {
  return Promise.all([getUser(), getChannels()]).then((response) => {
    let user = null
    let channels = null

    if (response[0] !== null && response[0] !== undefined) {
      user = response[0]
    }

    if (response[1] !== null && response[1] !== undefined) {
      channels = response[1]
    }

    return { user, channels }
  })
}
