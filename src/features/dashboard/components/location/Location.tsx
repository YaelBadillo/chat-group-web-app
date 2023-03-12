import { FC } from 'react'

interface LocationProps {
  location: string
}

export const Location: FC<LocationProps> = ({ location }: LocationProps) => {
  return <div className="w-full text-lg font-bold leading-6">{location}</div>
}
