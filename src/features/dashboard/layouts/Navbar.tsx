import { FC } from 'react'

interface NavbarProps {
  children?: JSX.Element | JSX.Element[]
}

export const Navbar: FC<NavbarProps> = ({ children }) => {
  return <div className="h-max w-full text-white shadow-line">{children}</div>
}
