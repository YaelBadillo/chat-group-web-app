import { ChangeEventHandler, FC, FormEventHandler } from 'react'

interface InputTextMessageProps {
  name: string
  value: string
  onChange: ChangeEventHandler<HTMLTextAreaElement>
  onSubmit: FormEventHandler<HTMLFormElement>
}

export const InputTextMessage: FC<InputTextMessageProps> = ({
  name,
  value,
  onChange,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-1 items-center rounded-lg bg-tertiary p-2"
    >
      <label htmlFor="" className="flex flex-1 px-3">
        <textarea
          name={name}
          value={value}
          placeholder="Type a message here"
          rows={1}
          onChange={onChange}
          className="flex-1 resize-none bg-transparent text-gray-light outline-none"
        ></textarea>
      </label>
      <button className="flex h-max w-max rounded-lg bg-send-button-color p-2 text-white">
        <span className="material-icons">send</span>
      </button>
    </form>
  )
}
