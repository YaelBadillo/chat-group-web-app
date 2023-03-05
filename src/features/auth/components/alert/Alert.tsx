import { useState } from 'react'

export const Alert = () => {
  const [close, setClose] = useState(false)

  const handleClose = () => {
    setClose(close ? false : true)
  }

  return (
    <div
      className={`absolute left-0 right-0 mx-auto mt-3 flex w-3/4 content-between items-start gap-x-1 rounded-sm bg-red-400 p-1 text-sm text-white${
        close ? ' hidden' : ''
      }`}
    >
      <span>
        Error: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
        dolore enim repudiandae non, explicabo temporibus a vero adipisci!
        Quaerat ducimus sapiente perspiciatis obcaecati pariatur nemo
        dignissimos aliquam adipisci nesciunt ea.
      </span>

      <button
        onClick={handleClose}
        className="flex rounded-sm hover:bg-red-500"
      >
        <span className="material-icons text-xl leading-none">close</span>
      </button>
    </div>
  )
}
