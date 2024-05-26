import React from 'react'
import { FlagDetailsTypes } from './types'

const FlagDetails = ({ data, ...props }: FlagDetailsTypes) => {
  const styles = {
    // '--data-coat-of-arms': `url(${data.coatOfArms.svg})`,
  } as React.CSSProperties

  return (
    <div
      // data-coat-of-arms={data.coatOfArms.svg as string}
      // className="pr-1 before:h-40 before:w-40 before:content-[''] before:bg-[var(--data-coat-of-arms)]"
      className="pr-1"
      style={styles}
      {...props}
    >
      <p className="truncate" title="Country Code">
        {data.idd.root}
      </p>
      <p className="truncate" title="Country Name">
        {data.name.common}
      </p>
      <p className="truncate" title="Time Zones">
        {data.timezones.join(', ')}
      </p>
      <p className="truncate" title="Calling Code">
        {data.idd.suffixes
          ?.map((sfx) => [data.idd.root, sfx].join(''))
          .join(', ')}
      </p>
    </div>
  )
}

export default FlagDetails
