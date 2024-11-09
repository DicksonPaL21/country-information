import { useAdBlockerContext } from '@/app/providers'
import { ComponentType } from 'react'

const withAdBlockerDetection = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  return (props: P) => {
    const { adBlockDetected } = useAdBlockerContext()

    if (adBlockDetected) {
      return <></>
    }

    return <WrappedComponent {...(props as P)} />
  }
}

export default withAdBlockerDetection
