import { FC } from 'react'

interface SidebarProps {
  children: JSX.Element | JSX.Element | null
}

export const Sidebar: FC<SidebarProps> = ({ children }: SidebarProps) => {
  return (
    <div className="flex h-full w-3/12 flex-col gap-y-5 bg-secondary">
      {children}
    </div>
  )
}
