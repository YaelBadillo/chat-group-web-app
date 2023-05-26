import { FC } from 'react'

interface SidebarMainContentProps {
  children?: JSX.Element | JSX.Element[]
}

export const SidebarMainContentProps: FC<SidebarMainContentProps> = ({
  children,
}) => {
  return (
    <div className="flex w-full flex-grow flex-col gap-y-5 px-6 py-5">
      {children}
    </div>
  )
}
