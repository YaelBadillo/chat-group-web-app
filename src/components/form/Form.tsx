import { FC, FormEventHandler } from 'react'

interface FormProps {
  handleSubmit?:  FormEventHandler<HTMLFormElement>
  children: JSX.Element | JSX.Element[]
}

export const Form: FC<FormProps> = ({ handleSubmit, children }) => {
  return (
    <form onSubmit={handleSubmit} className="grid w-full grid-cols-1 gap-y-3">
      {children}
    </form>
  )
}
