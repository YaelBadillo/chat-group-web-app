import { FC } from 'react'

interface MemberCardProps {
  memberImage: string
  memberName: string
}

export const MemberCard: FC<MemberCardProps> = ({
  memberImage,
  memberName,
}) => {
  return (
    <button className="flex h-max w-full cursor-pointer items-center gap-x-3 rounded-lg p-1 hover:bg-channel-card-hover">
      <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
        <img src={memberImage} alt="" className="h-full w-auto" />
      </div>
      <span className="text-lg font-bold text-gray-dark">{memberName}</span>
    </button>
  )
}
