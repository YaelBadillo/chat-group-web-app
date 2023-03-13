import { Socket } from 'socket.io-client'

export interface ChatGroupSockets {
  channel: Socket<ServerToClientChannelEvents>
  member: Socket<ServerToClientMemberEvents>
  message: Socket<ServerToClientMessageEvents, ClientToServerMessageEvents>
}

interface ServerToClientChannelEvents {
  handleUpdate: (channel: unknown) => void
  handleDelete: (channel: unknown) => void
}

interface ServerToClientMemberEvents {
  handleInvitation: (invitation: unknown) => void
  handleNewMember: (member: unknown) => void
  handleRequestToJoin: (requestOJoin: unknown) => void
}

interface ServerToClientMessageEvents {
  handleMessage: (message: unknown) => void
  handleDeletedMessage: (messageId: string) => void
}

interface ClientToServerMessageEvents {
  createMessage: () => void
}
