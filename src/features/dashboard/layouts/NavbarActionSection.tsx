import { FC } from 'react'

interface NavbarActionSectionProps {
  children?: JSX.Element | JSX.Element[]
}

export const NavbarActionSection: FC<NavbarActionSectionProps> = ({
  children,
}) => {
  return (
    <div className="flex w-3/12 items-center gap-x-2 bg-secondary px-6 pb-4 pt-6 text-gray-light">
      {children}
    </div>
  )
}
