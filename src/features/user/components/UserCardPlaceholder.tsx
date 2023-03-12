export const UserCardPlaceholder = () => {
  return (
    <div className="flex flex-row items-center gap-x-5 px-7 py-4">
      <div className="h-10 w-10 flex-shrink-0 animate-skeleton-loading overflow-hidden rounded-md bg-tertiary opacity-70"></div>
      <div className="flex h-5 w-full animate-skeleton-loading flex-row items-center justify-between rounded-md bg-tertiary opacity-70"></div>
    </div>
  )
}
