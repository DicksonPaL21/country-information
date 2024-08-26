import useValue from '@/hooks/useValue'
import { cn } from '@/utils/formatters/cn'
import React from 'react'
import { SearchFieldTypes } from '../Country/types'
import { CloseIcon } from '../icons/Close'
import { SearchIcon } from '../icons/Search'

const SearchField = ({
  value,
  onValueCallback,
  placeholder,
  ...props
}: SearchFieldTypes) => {
  const [_value, _setValue] = useValue(value ?? '', {
    forward: onValueCallback,
  })

  const searchProps = {
    className: 'absolute top-[7px] left-[7px]',
  }

  const clearProps = {
    title: 'Clear search',
    className: cn('absolute top-[7px] right-[7px] cursor-pointer hidden', {
      block: _value,
    }),
    onClick: () => _setValue(''),
  }

  const inputProps = {
    ...props,
    className: cn(
      'w-full placeholder-gray-400 bg-transparent border border-neutral-800 p-2 px-9 rounded-lg',
      'focus:outline-none focus:ring focus:ring-blue-500/50'
    ),
    placeholder: placeholder ?? 'Search',
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      _setValue(e.target.value as string)
    },
    value: _value,
  }

  return (
    <div className="relative w-full">
      <span {...searchProps}>
        <SearchIcon className="stroke-gray-400" />
      </span>
      <span {...clearProps}>
        <CloseIcon className="fill-gray-400 stroke-none" />
      </span>
      <input {...inputProps} />
    </div>
  )
}

export default React.memo(SearchField)
