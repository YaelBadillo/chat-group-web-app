export const InputTextMessage = () => {
  return (
    <form
      action=""
      className="flex flex-1 items-center rounded-lg bg-tertiary p-2"
    >
      <label htmlFor="" className="flex flex-1 px-3">
        <textarea
          placeholder="Type a message here"
          rows={1}
          className="flex-1 resize-none bg-transparent text-gray-light outline-none"
        ></textarea>
      </label>
      <button className="flex h-max w-max rounded-lg bg-send-button-color p-2 text-white">
        <span className="material-icons">send</span>
      </button>
    </form>
  )
}
