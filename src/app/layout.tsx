import AdBlockerAlert from '@/components/AdBlockerAlert'
import BmcWidget from '@/components/widget/Bmc'
import { cn } from '@/utils/formatters/cn'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './globals.scss'
import { AdBlockerProvider, AppContextProvider } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Country Information',
  description: 'Powered by REST Countries API v3.1',
  other: {
    'google-adsense-account': 'ca-pub-5215573300733761',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  userScalable: false,
}

type RootLayoutTypes = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutTypes) {
  return (
    <html lang="en" data-mode="dark">
      <SkeletonTheme
        baseColor="rgb(39 39 42 / 0.3)"
        highlightColor="rgb(38 38 38 / var(--tw-border-opacity))"
      >
        <body className={cn('flex min-h-svh flex-col', inter.className)}>
          <AppContextProvider>
            <AdBlockerProvider>
              <AdBlockerAlert />
              {children}
            </AdBlockerProvider>
          </AppContextProvider>
          <BmcWidget />
        </body>
      </SkeletonTheme>
    </html>
  )
}
