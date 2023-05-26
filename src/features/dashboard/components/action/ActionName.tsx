import { FC } from 'react'

interface ActionNameProps {
  name: string
}

export const ActionName: FC<ActionNameProps> = ({ name }) => {
  return (
    <div className="w-full text-lg font-bold leading-6">{name}</div>
  )
}
