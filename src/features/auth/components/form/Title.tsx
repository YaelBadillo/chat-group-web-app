import { FC } from 'react'

interface Title {
  children: string
}

export const Title: FC<Title> = ({ children }) => {
  return <h2 className="text-2xl font-bold text-gray-light">{children}</h2>
}
