import { FC } from 'react'

interface ChannelsContainerProps {
  children: JSX.Element | JSX.Element[] | null
}

export const ChannelsContainer: FC<ChannelsContainerProps> = ({
  children,
}: ChannelsContainerProps) => {
  return <div className="flex h-full w-full flex-col gap-y-2">{children}</div>
}
