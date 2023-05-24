import { getChannels } from '../features/channel'
import { getUser } from '../features/user'

export const getUserAndChannels = () => {
  return Promise.all([getUser(), getChannels()]).then((response) => ({
    user:
      response[0] !== null && response[0] !== undefined
        ? response[0]
        : undefined,
    channels:
      response[1] !== null && response[1] !== undefined
        ? response[1]
        : undefined,
  }))
}
