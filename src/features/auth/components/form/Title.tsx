import { FC } from 'react'

interface TitleProps {
  children: string
}

export const Title: FC<TitleProps> = ({ children }) => {
  return <h2 className="text-2xl font-bold text-gray-light">{children}</h2>
}
