export type CountryTypes = {
  capital: string[]
  coatOfArms: { svg: string }
  continents: string[]
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  flags: { svg: string }
  idd: {
    root: string
    suffixes: string[]
  }
  languages: { [key: string]: string }
  maps: { googleMaps: string; openStreetMaps: string }
  name: {
    common: string
    official: string
    nativeName: { [key: string]: string }
  }
  population: number
  region: string
  timezones: string[]
}

export type Types = React.HTMLAttributes<HTMLDivElement> & {
  fallback?: React.ReactNode
}

// FLAGS
type FlagDataTypes = {
  flags: CountryTypes['flags']
  name: CountryTypes['name']
}

export type FlagTypes = {
  className?: string
  data: FlagDataTypes
}

type FlagDetailsDataTypes = {
  coatOfArms: CountryTypes['coatOfArms']
  idd: CountryTypes['idd']
  name: CountryTypes['name']
  timezones: CountryTypes['timezones']
}

export type FlagDetailsTypes = React.HTMLAttributes<HTMLDivElement> & {
  data: FlagDetailsDataTypes
}

export type SearchFieldTypes = React.HTMLAttributes<HTMLInputElement> & {
  value?: string
  onValueCallback?: (value: string) => void
  placeholder?: string
}
