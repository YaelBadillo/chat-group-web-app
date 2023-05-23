import { FC, FormEventHandler, useMemo } from 'react'

import { useNavigate } from 'react-router-dom'

import { getAcronym } from '../utils'

interface ChannelCardProps {
  id: string
  name: string
}

export const ChannelCard: FC<ChannelCardProps> = ({ id, name }) => {
  const nameAcronym = useMemo(() => getAcronym(name), [name])
  const navigate = useNavigate()

  const handleClick: FormEventHandler<HTMLButtonElement> = () => {
    navigate(`/dashboard/channel/${id}`)
  }

  return (
    <button
      onClick={handleClick}
      className="flex h-max w-full cursor-pointer items-center gap-x-3 rounded-lg p-1 hover:bg-channel-card-hover"
    >
      <span className="h-11 w-11 rounded-lg bg-group-image p-2 text-center text-base font-semibold leading-7 text-gray-light">
        {nameAcronym}
      </span>
      <div className="w-max text-base font-bold text-group-name">
        {name.toUpperCase()}
      </div>
    </button>
  )
}
