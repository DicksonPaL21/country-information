import { useAdBlockerContext } from '@/app/providers'
import React from 'react'

const withAdBlockerDetection = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithAdBlockerDetection: React.FC<P> = (props) => {
    const { adBlockDetected } = useAdBlockerContext()

    if (adBlockDetected) {
      return <></>
    }

    return <WrappedComponent {...(props as P)} />
  }

  return WithAdBlockerDetection
}

export default withAdBlockerDetection
