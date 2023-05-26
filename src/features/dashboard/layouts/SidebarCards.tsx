import { FC } from 'react'

interface SidebarCardsProps {
  children?: JSX.Element | JSX.Element[]
}

export const SidebarCards: FC<SidebarCardsProps> = ({ children }) => {
  return <div className="flex h-full w-full flex-col">{children}</div>
}
