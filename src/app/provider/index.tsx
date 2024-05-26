'use client'

import { actions } from '@/helpers'
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { AppContextProps } from './types'

const AppContext = createContext<AppContextProps>({
  data: [],
  error: undefined,
  activeIndex: -1,
  setActiveIndex: () => {},
  isSelectCountry: false,
  setIsSelectCountry: () => {},
  getAllCountries: () => {},
  getCountryByName: () => {},
})
export const useAppContext = () => useContext(AppContext)

export function AppContextProvider({ ...props }: any) {
  const [data, setData] = useState<any[]>([])
  const [error, setError] = useState()
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const [isSelectCountry, setIsSelectCountry] = useState(false)

  const query = useMemo(() => {
    return new URLSearchParams({
      fields:
        'flags,name,coatOfArms,idd,timezones,maps,continents,region,currencies,languages,capital,population',
    })
  }, [])

  const getAllCountries = useCallback(() => {
    const onSuccess = (res: any) => setData(res)
    const onError = (res: any) => setError(res)
    actions.getCountries(onSuccess, onError, query.toString())
  }, [query])

  const getCountryByName = useCallback((name: string) => {
    const onSuccess = (res: any) => setData(res)
    const onError = (res: any) => setError(res)
    actions.getCountryByName(name, onSuccess, onError)
  }, [])

  const contextValues = useMemo(
    () => ({
      data,
      error,
      activeIndex,
      setActiveIndex,
      isSelectCountry,
      setIsSelectCountry,
      getAllCountries,
      getCountryByName,
    }),
    [
      data,
      error,
      activeIndex,
      isSelectCountry,
      getAllCountries,
      getCountryByName,
    ]
  )

  return <AppContext.Provider value={contextValues} {...props} />
}
