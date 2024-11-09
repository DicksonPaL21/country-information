'use client'

import { useAdBlockerContext } from '@/app/providers'

const AdBlockerAlert = () => {
  const { adBlockDetected } = useAdBlockerContext()

  if (!adBlockDetected) {
    return <></>
  }

  return (
    <div className="mx-auto flex items-center bg-indigo-800 p-1 leading-none text-indigo-100 sm:my-4 sm:rounded-full">
      <span className="mr-3 flex rounded-full bg-indigo-500 px-2 py-1 text-center text-[10px] uppercase">
        Ad Blocker Detected
      </span>
      <span className="mr-2 flex-auto text-left text-[12px]">
        Please disable your ad blocker to support our content and view ads
      </span>
    </div>
  )
}

export default AdBlockerAlert
