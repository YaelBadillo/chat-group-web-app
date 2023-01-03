import { FC } from 'react'

interface ButtonProps {
  content: string
}

export const Button: FC<ButtonProps> = ({ content }) => {
  return (
    <button className="mt-2 rounded-lg bg-button-primary p-3 text-white">
      {content}
    </button>
  )
}
