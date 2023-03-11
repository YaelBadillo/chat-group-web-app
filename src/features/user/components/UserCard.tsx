import { FC } from 'react'

import pet from '../../../assets/pet.jpg'

interface UserCardProps {
  name: string
}

export const UserCard: FC<UserCardProps> = ({ name }: UserCardProps) => {
  return (
    <div className="flex flex-row items-center gap-x-5 px-7 py-4">
      <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
        <img src={pet} alt="" className="h-full w-auto" />
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <span className="text-base font-bold text-gray-dark">{name}</span>
        <button className="p-1">
          <span className="material-icons text-group-name">expand_more</span>
        </button>
      </div>
    </div>
  )
}
