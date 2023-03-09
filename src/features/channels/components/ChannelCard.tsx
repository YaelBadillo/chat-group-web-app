export const ChannelCard = () => {
  return (
    <div className="flex h-max w-full cursor-pointer items-center gap-x-3">
      <span className="h-11 w-11 rounded-lg bg-group-image p-2 text-center text-base font-semibold leading-7 text-gray-light">
        FD
      </span>
      <div className="w-max text-base font-bold text-group-name">
        Front-end Developers
      </div>
    </div>
  )
}
