import { FC } from 'react'

interface FormContainer {
  children: JSX.Element | JSX.Element[]
}

export const FormContainer: FC<FormContainer> = ({ children }) => {
  return (
    <div className="m-auto grid w-4/12 justify-items-center gap-3 rounded-3xl bg-primary px-6 py-6">
      {children}
    </div>
  )
}
