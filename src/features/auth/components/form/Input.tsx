import { ChangeEvent, FC } from 'react'

interface InputProps {
  type: 'text' | 'password'
  name: string
  placeholder: string
  autoComplete?: 'off' | 'on'
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  startIcon: string
}

const defaultProps: Partial<InputProps> = {
  autoComplete: 'off',
}

export const Input: FC<InputProps> = ({
  type,
  name,
  placeholder,
  autoComplete,
  value,
  onChange,
  startIcon,
}) => {
  return (
    <label className="flex flex-row-reverse content-center justify-end gap-x-2 rounded-lg bg-tertiary px-3 py-3">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        className="peer h-7 max-w-max bg-transparent text-gray-light outline-none"
      />
      <span className="material-icons text-xl text-gray-light peer-focus:hidden peer-[&:not(:placeholder-shown)]:hidden">
        {startIcon}
      </span>
    </label>
  )
}

Input.defaultProps = defaultProps
