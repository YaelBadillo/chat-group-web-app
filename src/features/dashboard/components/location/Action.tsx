import { FC, MouseEventHandler } from 'react'

interface ActionProps {
  icon: string
  handleClick: MouseEventHandler<HTMLButtonElement>
}

export const Action: FC<ActionProps> = ({ icon, handleClick }) => {
  return (
    <button onClick={handleClick} className="flex items-center">
      <span className="material-icons">{icon}</span>
    </button>
  )
}
