import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import ThemeProvider from '@/components/providers/theme'
import { cn } from '@/lib/utils'
import Header from '@/components/ui/header'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Manuel Bento',
  description: 'Welcome to my portfolio'
}

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'flex min-h-screen flex-col antialiased'
        )}
      >
        <ThemeProvider>
          <Header />
          <main className='size-full flex-1'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
