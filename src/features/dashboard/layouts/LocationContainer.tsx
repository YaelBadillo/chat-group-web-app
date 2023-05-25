import { FC } from 'react'

interface LocationContainerProps {
  children?: JSX.Element | JSX.Element[]
}

export const LocationContainer: FC<LocationContainerProps> = ({ children }) => {
  return (
    <div className="flex w-3/12 items-center bg-secondary px-6 pb-4 pt-6 text-gray-light">
      {children}
    </div>
  )
}
