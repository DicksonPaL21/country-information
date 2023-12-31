export type Types = React.HTMLAttributes<HTMLDivElement> & {
  data: any[]
  activeIndex: number | null
  setActiveIndex: (idx: number) => void
  fallback: React.ReactNode
  error?: { message: string }
}

type FlagDataTypes = {
  flags: { svg: string }
  name: { common: string }
}

export type FlagTypes = Omit<React.ComponentProps<'img'>, 'src' | 'alt'> & {
  data: FlagDataTypes
}

type FlagDetailsDataTypes = {
  coatOfArms: { svg: string }
  idd: {
    root: string
    suffixes: string[]
  }
  name: { common: string }
  timezones: string[]
}

export type FlagDetailsTypes = React.HTMLAttributes<HTMLDivElement> & {
  data: FlagDetailsDataTypes
}
