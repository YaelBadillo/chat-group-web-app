import { useContext, useEffect } from 'react'

import { useLocation, useParams } from 'react-router-dom'

import { DashboardContext } from '../features/dashboard'
import pet from '../assets/pet.jpg'

export const ChannelChat = () => {
  const { channelId } = useParams()
  const location = useLocation()
  const dashboard = useContext(DashboardContext)

  useEffect(() => console.log(location), [])

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col-reverse gap-y-9 overflow-y-scroll px-20 py-12">
        <div className="flex w-10/12 flex-row gap-x-7">
          <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
            <img src={pet} alt="" className="h-full w-auto" />
          </div>
          <div>
            <div className="flex items-baseline gap-x-6">
              <span className="text-lg font-bold text-gray-dark">
                Lorem, ipsum.
              </span>
              <span className="text-sm font-medium text-gray-dark">
                today at 1:30 PM
              </span>
            </div>
            <span className="text-lg font-medium text-gray-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              fugiat distinctio debitis unde, error commodi facere blanditiis
              quis quaerat laudantium? Nemo iusto explicabo dignissimos, dolorem
              ipsam harum provident voluptate facere!
            </span>
          </div>
        </div>

        <div className="flex w-10/12 flex-row gap-x-7 self-end">
          <div>
            <div className="flex items-baseline justify-end gap-x-6">
              <span className="text-lg font-bold text-gray-dark">
                Lorem, ipsum dolor.
              </span>
              <span className="text-sm font-medium text-gray-dark">
                today at 1:30 PM
              </span>
            </div>
            <span className="text-lg font-medium text-gray-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              fugiat distinctio debitis unde, error commodi facere blanditiis
              quis quaerat laudantium? Nemo iusto explicabo dignissimos, dolorem
              ipsam harum provident voluptate facere!
            </span>
          </div>
          <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
            <img src={pet} alt="" className="h-full w-auto" />
          </div>
        </div>

        {/*
        <div className="flex w-10/12 flex-row gap-x-7">
          <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
            <img src={pet} alt="" className="h-full w-auto" />
          </div>
          <div>
            <div className="flex items-baseline gap-x-6">
              <span className="text-lg font-bold text-gray-dark">
                Lorem, ipsum dolor.
              </span>
              <span className="text-sm font-medium text-gray-dark">
                today at 1:30 PM
              </span>
            </div>
            <span className="text-lg font-medium text-gray-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
              fugiat distinctio debitis unde, error commodi facere blanditiis
              quis quaerat laudantium? Nemo iusto explicabo dignissimos, dolorem
              ipsam harum provident voluptate facere!
            </span>
          </div>
        </div>
  */}
      </div>
      <div className="flex flex-row px-20 py-10">
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
      </div>
    </div>
  )
}
