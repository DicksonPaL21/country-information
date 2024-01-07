'use client'

import React from 'react'
import { FlagDetailsTypes } from './types'

const FlagDetails = ({ data, ...props }: FlagDetailsTypes) => {
  const styles = {
    '--data-coat-of-arms': `url(${data.coatOfArms.svg})`,
  } as React.CSSProperties

  return (
    <div className="pr-1" style={styles} {...props}>
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
