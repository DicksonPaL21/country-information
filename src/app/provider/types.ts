import { Dispatch, SetStateAction } from 'react'

type DataProps = {
  flags: { svg: string }
  name: { common: string; official: string }
  continents: string[]
  region: string
  maps: { [key: string]: any }
  currencies: { [key: string]: any }
  languages: { [key: string]: string }
  capital: string[]
  population: number
  timezones: string[]
}

export type AppContextProps = {
  data: DataProps[]
  isLoading: boolean
  error?: { message: string }
  activeIndex: number
  setActiveIndex: Dispatch<SetStateAction<number>>
  isSelectCountry: boolean
  setIsSelectCountry: Dispatch<SetStateAction<boolean>>
  getAllCountries: () => void
  getCountryByName: (name: string) => void
}
