import { FC, ChangeEventHandler, FocusEventHandler } from 'react'

interface InputProps {
  type: 'text' | 'password'
  name: string
  placeholder: string
  autoComplete?: 'off' | 'on'
  value: string
  required?: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  onBlur: FocusEventHandler<HTMLInputElement>
  startIcon: string
  error: boolean
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
  required,
  onChange,
  onBlur,
  startIcon,
  error = false,
}) => {
  return (
    <label
      className={`flex flex-row-reverse content-center justify-end gap-x-2 rounded-lg bg-tertiary px-3 py-3${
        error ? ' border border-red-600' : ''
      }`}
    >
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        className="peer h-7 max-w-max bg-transparent text-gray-light outline-none"
      />
      <span className="material-icons text-xl text-gray-light peer-focus:hidden peer-[&:not(:placeholder-shown)]:hidden">
        {startIcon}
      </span>
    </label>
  )
}

Input.defaultProps = defaultProps
