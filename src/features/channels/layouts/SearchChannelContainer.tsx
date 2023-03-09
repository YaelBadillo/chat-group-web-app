import { FC } from 'react'

interface SearchChannelContainerProps {
  children: JSX.Element | JSX.Element[] | null
}

export const SearchChannelContainer: FC<SearchChannelContainerProps> = ({
  children,
}: SearchChannelContainerProps) => {
  return <div className="flex h-full flex-col gap-y-5 p-6">{children}</div>
}
