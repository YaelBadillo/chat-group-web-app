import pet from '../../assets/pet.jpg'

export const ChannelBar = () => {
  return (
    <div className="flex h-full w-3/12 flex-col gap-y-5 bg-secondary">
      <div className="flex h-full flex-col gap-y-5 p-6">
        <form className="mx-auto h-max w-full">
          <label className="flex w-full flex-row-reverse content-center justify-end gap-x-2 rounded-lg bg-search-input px-2 py-3">
            <input
              type="text"
              placeholder="Search"
              autoComplete="off"
              className="peer h-7 w-full bg-transparent text-gray-light outline-none"
            />
            <span className="material-icons text-xl text-gray-light peer-focus:hidden peer-[&:not(:placeholder-shown)]:hidden">
              search
            </span>
          </label>
        </form>

        <div className="flex h-full w-full flex-col gap-y-2">
          <button className="flex h-max w-full cursor-pointer items-center gap-x-3">
            <span className="h-11 w-11 rounded-lg bg-group-image p-2 text-center text-base font-semibold leading-7 text-gray-light">
              FD
            </span>
            <div className="w-max text-base font-bold text-group-name">
              Front-end Developers
            </div>
          </button>
          <button className="flex h-max w-full cursor-pointer items-center gap-x-3">
            <span className="h-11 w-11 rounded-lg bg-group-image p-2 text-center text-base font-semibold leading-7 text-gray-light">
              BD
            </span>
            <div className="w-max text-base font-bold text-group-name">
              Back-end Developers
            </div>
          </button>
          <button className="flex h-max w-full cursor-pointer items-center gap-x-3">
            <span className="h-11 w-11 rounded-lg bg-group-image p-2 text-center text-base font-semibold leading-7 text-gray-light">
              F
            </span>
            <div className="w-max text-base font-bold text-group-name">
              Family
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center px-7 py-4 gap-x-5">
        <div className="h-10 w-10 overflow-hidden rounded-md flex-shrink-0">
          <img src={pet} alt="" className="h-full w-auto" />
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <span className="text-base font-bold text-gray-dark">
            Yael Badillo
          </span>
          <button className="p-1">
            <span className="material-icons text-group-name">expand_more</span>
          </button> 
        </div>
      </div>
    </div>
  )
}
