import { FC } from 'react'

interface ChannelDescriptionProps {
  children?: string
}

export const ChannelDescription: FC<ChannelDescriptionProps> = ({
  children,
}) => {
  return <div className="text-lg font-normal text-gray-light">{children}</div>
}
