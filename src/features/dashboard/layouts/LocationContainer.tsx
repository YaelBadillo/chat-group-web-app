import { FC } from 'react'

interface LocationContainerProps {
  children?: JSX.Element | JSX.Element[]
}

export const LocationContainer: FC<LocationContainerProps> = ({ children }) => {
  return (
    <div className="flex items-center px-6 pb-4 pt-6 text-gray-light shadow-line">
      {children}
    </div>
  )
}
