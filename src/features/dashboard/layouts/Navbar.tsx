import { FC } from 'react'

interface NavbarProps {
  children?: JSX.Element | JSX.Element[]
}

export const Navbar: FC<NavbarProps> = ({ children }) => {
  return (
    <div className="flex h-max w-full items-center gap-x-16 text-white shadow-line">
      {children}
    </div>
  )
}
