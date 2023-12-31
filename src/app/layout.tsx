// import { store } from '@/services/store';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Country Information',
  description: 'Powered by REST Countries API v3.1',
}

type RootLayoutTypes = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutTypes) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider store={store}>{children}</Provider> */}
        {children}
      </body>
    </html>
  )
}
