import { FC } from 'react'

interface SearchChannelContainerProps {
  children?: JSX.Element | JSX.Element[]
}

export const SearchChannelContainer: FC<SearchChannelContainerProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-grow flex-col gap-y-5 px-6 py-5">{children}</div>
  )
}
