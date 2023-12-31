'use client'

import React from 'react'
import { FlagDetailsTypes } from './types'

const FlagDetails = ({ data, ...props }: FlagDetailsTypes) => {
  const styles = {
    '--data-coat-of-arms': `url(${data.coatOfArms.svg})`,
  } as React.CSSProperties

  return (
    <div className="card-body text-light py-0 px-2" style={styles} {...props}>
      <p className="card-text m-0" title="Country Code">
        {data.idd.root}
      </p>
      <p className="card-text m-0" title="Country Name">
        {data.name.common}
      </p>
      <p className="card-text m-0" title="Time Zones">
        {data.timezones.join(', ')}
      </p>
      <p className="card-text m-0" title="Calling Code">
        {data.idd.suffixes
          ?.map((sfx) => [data.idd.root, sfx].join(''))
          .join(', ')}
      </p>
    </div>
  )
}

export default FlagDetails
