'use client'

import { CountryTypes } from '@/components/Country/types'
import { actions } from '@/helpers'
import {
  ErrorResponseType,
  SuccessResponseType,
} from '@/services/request/types'
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
  activeCountry: undefined,
  setActiveCountry: () => {},
  isSelectCountry: false,
  setIsSelectCountry: () => {},
  getAllCountries: () => {},
  getCountryByName: () => {},
})
export const useAppContext = () => useContext(AppContext)

export function AppContextProvider({ ...props }: any) {
  const [data, setData] = useState<CountryTypes[]>([])
  const [isLoading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<ErrorResponseType | boolean>(false)
  const [activeCountry, setActiveCountry] = useState<CountryTypes | undefined>(
    undefined
  )
  const [isSelectCountry, setIsSelectCountry] = useState(false)

  const query = useMemo(() => {
    return new URLSearchParams({
      fields:
        'flags,name,coatOfArms,idd,timezones,maps,continents,region,currencies,languages,capital,population',
    })
  }, [])

  const getAllCountries = useCallback(() => {
    const onSuccess = (res: SuccessResponseType) => {
      setError(false)
      setData(res as CountryTypes[])
    }
    const onError = (res: ErrorResponseType) => {
      setData([] as CountryTypes[])
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
      const onSuccess = (res: SuccessResponseType) => {
        setError(false)
        setData(res as CountryTypes[])
      }
      const onError = (res: ErrorResponseType) => {
        setData([] as CountryTypes[])
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
      activeCountry,
      setActiveCountry,
      isSelectCountry,
      setIsSelectCountry,
      getAllCountries,
      getCountryByName,
    }),
    [
      data,
      isLoading,
      error,
      activeCountry,
      isSelectCountry,
      getAllCountries,
      getCountryByName,
    ]
  )

  return <AppContext.Provider value={contextValues} {...props} />
}
