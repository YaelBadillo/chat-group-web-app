import { FC } from 'react'

interface FormProps {
  children: JSX.Element | JSX.Element[]
}

export const Form: FC<FormProps> = ({ children }: FormProps) => {
  return (
    <form className="m-auto grid w-4/12 gap-3 rounded-3xl bg-primary px-6 py-6">
      <h2 className="text-lg font-bold text-gray-light">Sign up</h2>
      <p className="text-sm text-gray-light">
        Join thousands of people around the world
      </p>
      <div className="grid grid-cols-1 gap-y-3">
        {children}
      </div>
    </form>
  )
}
