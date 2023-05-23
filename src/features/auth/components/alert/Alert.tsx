import { FC, useState } from 'react'

interface AlertProps {
  message?: string
}

export const Alert: FC<AlertProps> = ({ message }) => {
  const [hidden, setHidden] = useState<boolean>(
    message === undefined ? true : false
  )

  const handleHidden = () => setHidden(!hidden)

  if (hidden) return null

  return (
    <div className="absolute left-0 right-0 mx-auto mt-3 flex w-3/4 items-start justify-between gap-x-1 rounded-sm bg-red-400 px-1 py-2 text-white">
      <span className="text-sm">{`${message}`}</span>

      <button
        onClick={handleHidden}
        className="flex rounded-sm hover:bg-red-500"
      >
        <span className="material-icons text-xl leading-none">close</span>
      </button>
    </div>
  )
}
