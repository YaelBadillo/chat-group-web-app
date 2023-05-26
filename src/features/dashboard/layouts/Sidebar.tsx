import { FC } from 'react'

interface SidebarProps {
  children?: JSX.Element | JSX.Element[]
}

export const Sidebar: FC<SidebarProps> = ({ children }) => {
  return <div className="flex w-1/4 flex-col bg-secondary">{children}</div>
}
