import { FC } from 'react'

interface FormProps {
  title: string
  text: string
  handleSubmit: () => void
  children: JSX.Element | JSX.Element[]
}

export const Form: FC<FormProps> = ({
  title,
  text,
  handleSubmit,
  children,
}: FormProps) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="m-auto grid w-4/12 justify-items-center gap-3 rounded-3xl bg-primary px-6 py-6"
    >
      <h2 className="text-2xl font-bold text-gray-light">{title}</h2>
      <p className="mb-2 text-sm text-gray-light">{text}</p>
      <div className="grid w-full grid-cols-1 gap-y-3">{children}</div>
    </form>
  )
}
