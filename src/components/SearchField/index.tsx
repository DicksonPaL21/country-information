import { cn } from '@/utils/formatters/cn'
import React from 'react'
import { useDebounceCallback } from 'usehooks-ts'
import { SearchFieldTypes } from '../Country/types'
import { SearchIcon } from '../icons/Search'

const SearchField = ({
  value,
  onValueCallback,
  placeholder,
  ...props
}: SearchFieldTypes) => {
  const callback = useDebounceCallback((v) => onValueCallback?.(v), 300)

  const spanProps = {
    className: 'absolute top-[7px] left-[7px]',
  }

  const inputProps = {
    ...props,
    className: cn(
      'w-full placeholder-gray-400 bg-transparent border border-neutral-800 p-2 pl-9 rounded-lg',
      'focus:outline-none focus:ring focus:ring-blue-500/50'
    ),
    placeholder: placeholder ?? 'Search',
    onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => {
      callback((e.target as HTMLInputElement).value as string)
    },
    value,
  }

  return (
    <div className="relative w-full">
      <span {...spanProps}>
        <SearchIcon className="stroke-gray-400" />
      </span>
      <input {...inputProps} />
    </div>
  )
}

export default React.memo(SearchField)
