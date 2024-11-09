import { CountryTypes } from '@/components/Country/types'
import { Dispatch, SetStateAction } from 'react'

export type AppContextProps = {
  data: CountryTypes[]
  isLoading: boolean
  error?: { message: string }
  activeCountry: any
  setActiveCountry: Dispatch<SetStateAction<any>>
  isSelectCountry: boolean
  setIsSelectCountry: Dispatch<SetStateAction<boolean>>
  getAllCountries: () => void
  getCountryByName: (name: string) => void
}

export type AdBlockerContextProps = {
  adBlockDetected: boolean
}
