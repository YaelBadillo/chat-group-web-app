import { FC, useMemo } from 'react'
import { getAcronym } from '../utils'

interface ChannelCardProps {
  name: string
}

export const ChannelCard: FC<ChannelCardProps> = ({ name }) => {
  const nameAcronym = useMemo(() => getAcronym(name), [name])
  return (
    <div className="flex h-max w-full cursor-pointer items-center gap-x-3 rounded-lg p-1 hover:bg-channel-card-hover">
      <span className="h-11 w-11 rounded-lg bg-group-image p-2 text-center text-base font-semibold leading-7 text-gray-light">
        {nameAcronym}
      </span>
      <div className="w-max text-base font-bold text-group-name">
        {name.toUpperCase()}
      </div>
    </div>
  )
}
