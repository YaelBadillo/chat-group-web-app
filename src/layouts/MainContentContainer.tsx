import { FC } from 'react'

interface MainContentContainerProps {
  children?: JSX.Element | JSX.Element[]
}

export const MainContentContainer: FC<MainContentContainerProps> = ({
  children,
}) => {
  return <div className="flex h-full w-full">{children}</div>
}
