import { FC } from 'react'

interface DashboardContainerProps {
  children?: JSX.Element | JSX.Element[]
}

export const DashboardContainer: FC<DashboardContainerProps> = ({
  children,
}) => {
  return <div className="flex h-full w-full bg-primary">{children}</div>
}
