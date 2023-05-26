import { FC } from 'react'

interface ChannelInfoProps {
  children?: JSX.Element | JSX.Element[]
}

export const ChannelInfo: FC<ChannelInfoProps> = ({ children }) => {
  return <span className="flex flex-col gap-y-4">{children}</span>
}
