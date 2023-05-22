import { FC } from 'react'

interface DescriptionProps {
  children: string
}

export const Description: FC<DescriptionProps> = ({ children }) => {
  return <p className="mb-2 text-sm text-gray-light">{children}</p>
}
