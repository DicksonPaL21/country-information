'use client'

import { actions } from '@/helpers'
import { useDebouncedEffect } from '@/hooks'
import { createContext, useContext, useMemo, useState } from 'react'
import { AppContextProps } from './types'

const AppContext = createContext<AppContextProps>({
  data: [],
  error: undefined,
  activeIndex: -1,
  setActiveIndex: () => {},
  isSelectCountry: false,
  setIsSelectCountry: () => {},
  getCountryByName: () => {},
})
export const useAppContext = () => useContext(AppContext)

export function AppContextProvider({ ...props }: any) {
  const [data, setData] = useState<any[]>([])
  const [error, setError] = useState()
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const [isSelectCountry, setIsSelectCountry] = useState(false)

  const query = new URLSearchParams({
    fields:
      'flags,name,coatOfArms,idd,timezones,maps,continents,region,currencies,languages,capital,population',
  })

  const getAllCountries = () => {
    const onSuccess = (res: any) => setData(res)
    const onError = (res: any) => setError(res)
    actions.getCountries(onSuccess, onError, query.toString())
  }
  useDebouncedEffect(getAllCountries, 200, [])

  const getCountryByName = (name: string) => {
    const onSuccess = (res: any) => setData(res)
    const onError = (res: any) => setError(res)
    actions.getCountryByName(name, onSuccess, onError)
  }

  const contextValues = useMemo(
    () => ({
      data,
      error,
      activeIndex,
      setActiveIndex,
      isSelectCountry,
      setIsSelectCountry,
      getCountryByName,
    }),
    [data, error, activeIndex, isSelectCountry, getCountryByName]
  )

  return <AppContext.Provider value={contextValues} {...props} />
}
