'use client'

import { useEffect, useState } from 'react'

const DetectAdBlocker = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false)

  useEffect(() => {
    // Create a dummy ad element
    const adTest = document.createElement('div')
    adTest.innerHTML = '&nbsp;'
    adTest.className = 'adsbygoogle'
    adTest.style.cssText = 'display:inline-block;width:1px;height:1px;'
    document.body.appendChild(adTest)

    // Check if ad element is blocked
    setTimeout(() => {
      if (adTest.offsetHeight === 0 || adTest.offsetWidth === 0) {
        setAdBlockDetected(true)
      }
      // Remove the test element
      document.body.removeChild(adTest)
    }, 300) // A delay to allow rendering
  }, [])

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

export default DetectAdBlocker
