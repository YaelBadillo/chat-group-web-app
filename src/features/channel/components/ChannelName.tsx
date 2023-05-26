import { FC } from 'react'

interface ChannelNameProps {
  children?: string
}

export const ChannelName: FC<ChannelNameProps> = ({ children }) => {
  return (
    <span className="text-lg font-bold uppercase text-gray-light">
      {children}
    </span>
  )
}
