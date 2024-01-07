// import { store } from '@/services/store';
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Country Information',
  description: 'Powered by REST Countries API v3.1',
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
      <body className={inter.className}>
        {/* <Provider store={store}>{children}</Provider> */}
        {children}
      </body>
    </html>
  )
}
