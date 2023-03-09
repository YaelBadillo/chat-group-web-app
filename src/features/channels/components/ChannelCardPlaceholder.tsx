export const ChannelCardPlaceholder = () => {
  return (
    <div className="flex h-max w-full items-center gap-x-3">
      <div className="h-11 w-11 animate-skeleton-loading rounded-lg bg-tertiary p-2 text-center text-base font-semibold leading-7 opacity-70"></div>
      <div className="h-11 w-full animate-skeleton-loading rounded-lg bg-tertiary opacity-70"></div>
    </div>
  )
}
