import { FC } from 'react'

interface DashboardContainerProps {
  children: JSX.Element | JSX.Element[] | null
}

export const DashboardContainer: FC<DashboardContainerProps> = ({
  children,
}: DashboardContainerProps) => {
  return <div className="flex h-full w-full bg-primary">{children}</div>
}
