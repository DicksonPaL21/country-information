import React from 'react'
import { useDebounceCallback } from 'usehooks-ts'
import { SearchFieldType } from '../Country/types'
import './SearchField.scss'

const SearchField = ({
  value,
  onValueCallback,
  placeholder,
  ...props
}: SearchFieldType) => {
  const callback = useDebounceCallback((v) => onValueCallback?.(v), 300)

  const spanProps = {
    className: 'fa fa-search form-control-feedback',
  }

  const inputProps = {
    ...props,
    className: 'form-control w-full',
    placeholder: placeholder ?? 'Search',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      callback(e.target.value as string)
    },
    value,
  }

  return (
    <div className="w-full form-group has-search">
      <span {...spanProps} />
      <input {...inputProps} />
    </div>
  )
}

export default React.memo(SearchField)
