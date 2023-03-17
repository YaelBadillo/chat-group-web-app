import { io } from 'socket.io-client'

import { ChatGroupSockets } from './events.types'

const URL = 'http://localhost:3000/'
const NAMESPACES = {
  channel: 'channel',
  member: 'member',
  message: 'message',
}

export const sockets: ChatGroupSockets = {
  channel: io(`${URL}${NAMESPACES.channel}`, {
    withCredentials: true,
    autoConnect: false,
  }),
  member: io(`${URL}${NAMESPACES.member}`, {
    withCredentials: true,
    autoConnect: false,
  }),
  message: io(`${URL}${NAMESPACES.message}`, {
    withCredentials: true,
    autoConnect: false,
  }),
}
