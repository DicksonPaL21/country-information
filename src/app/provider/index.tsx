'use client'

import { actions } from '@/helpers'
import { ErrorResponseType } from '@/services/request/types'
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
  isLoading: true,
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
  const [isLoading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<ErrorResponseType | boolean>(false)
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  const [isSelectCountry, setIsSelectCountry] = useState(false)

  const query = useMemo(() => {
    return new URLSearchParams({
      fields:
        'flags,name,coatOfArms,idd,timezones,maps,continents,region,currencies,languages,capital,population',
    })
  }, [])

  const getAllCountries = useCallback(() => {
    const onSuccess = (res: any) => {
      setError(false)
      setData(res)
    }
    const onError = (res: any) => {
      setData([])
      setError(res)
    }
    const onFetching = (state: boolean) => {
      if (state) setError(false)
      setLoading(state)
    }
    actions.getCountries(onSuccess, onError, onFetching, query.toString())
  }, [query])

  const getCountryByName = useCallback(
    (name: string) => {
      const onSuccess = (res: any) => {
        setError(false)
        setData(res)
      }
      const onError = (res: any) => {
        setData([])
        setError(res)
      }
      const onFetching = (state: boolean) => {
        if (state) setError(false)
        setLoading(state)
      }
      actions.getCountryByName(
        name,
        onSuccess,
        onError,
        onFetching,
        query.toString()
      )
    },
    [query]
  )

  const contextValues = useMemo(
    () => ({
      data,
      isLoading,
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
      isLoading,
      error,
      activeIndex,
      isSelectCountry,
      getAllCountries,
      getCountryByName,
    ]
  )

  return <AppContext.Provider value={contextValues} {...props} />
}
