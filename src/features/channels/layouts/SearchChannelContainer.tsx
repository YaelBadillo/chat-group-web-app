import { FC } from 'react'

interface SearchChannelContainerProps {
  children: JSX.Element | JSX.Element[] | null
}

export const SearchChannelContainer: FC<SearchChannelContainerProps> = ({
  children,
}: SearchChannelContainerProps) => {
  return (
    <div className="flex flex-grow flex-col gap-y-5 px-6 py-5">{children}</div>
  )
}
