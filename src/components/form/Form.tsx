import { FC } from 'react'

interface FormProps {
  handleSubmit: () => void
  children: JSX.Element | JSX.Element[]
}

export const Form: FC<FormProps> = ({
  handleSubmit,
  children,
}: FormProps) => {
  return (
    <form onSubmit={handleSubmit} className="grid w-full grid-cols-1 gap-y-3">
      {children}
    </form>
  )
}
