import { FC } from 'react'

interface TextMessageProps {
  userImage: string
  userName: string
  text: string
  sentDate: Date
  own?: boolean
}

export const TextMessage: FC<TextMessageProps> = ({
  userImage,
  userName,
  text,
  sentDate,
  own = false,
}) => {
  return (
    <div className={`flex w-10/12 flex-row gap-x-7${own ? ' self-end' : ''}`}>
      {own ? (
        <></>
      ) : (
        <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
          <img src={userImage} alt="" className="h-full w-auto" />
        </div>
      )}
      <div>
        <div
          className={`flex items-baseline ${own ? 'justify-end ' : ''}gap-x-6`}
        >
          <span className="text-lg font-bold text-gray-dark">{userName}</span>
          <span className="text-sm font-medium text-gray-dark">
            today at 1:30 PM
          </span>
        </div>
        <span className="text-lg font-medium text-gray-light">{text}</span>
      </div>
      {own ? (
        <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
          <img src={userImage} alt="" className="h-full w-auto" />
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
