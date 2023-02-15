import { FC } from 'react'

interface Description {
  children: string
}

export const Description: FC<Description> = ({ children }) => {
  return <p className="mb-2 text-sm text-gray-light">{children}</p>
}
