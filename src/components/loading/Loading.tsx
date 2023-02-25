export const Loading = () => {
  return (
    <div className="grid h-full w-full content-center bg-secondary">
      <div className="m-auto my-5 flex flex-row items-center gap-5">
        <span className="inline-block h-4 w-4 rounded-full bg-tertiary animate-loading-400"></span>
        <span className="inline-block h-4 w-4 rounded-full bg-tertiary animate-loading-200"></span>
        <span className="inline-block h-4 w-4 rounded-full bg-tertiary animate-loading-000"></span>
      </div>
    </div>
  )
}
