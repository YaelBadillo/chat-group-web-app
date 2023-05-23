import { FC } from 'react'

interface ChannelChatContainerProps {
  children?: JSX.Element | JSX.Element[]
}

export const ChannelChatContainer: FC<ChannelChatContainerProps> = ({
  children,
}) => {
  return <div className="h-full w-full">{children}</div>
}
