import { FC } from 'react'

interface ChannelsContainerProps {
  children: JSX.Element | JSX.Element[] | null
}

export const ChannelsContainer: FC<ChannelsContainerProps> = ({ children }) => {
  return <div className="flex h-full w-full flex-col">{children}</div>
}
