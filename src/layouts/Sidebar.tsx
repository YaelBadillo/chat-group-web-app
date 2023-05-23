import { FC } from 'react'

interface SidebarProps {
  children?: JSX.Element | JSX.Element[]
}

export const Sidebar: FC<SidebarProps> = ({ children }: SidebarProps) => {
  return <div className="flex w-3/12 flex-col bg-secondary">{children}</div>
}
