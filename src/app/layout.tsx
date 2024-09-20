import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import ThemeProvider from '@/components/providers/theme'
import { cn } from '@/lib/utils'
import Header from '@/components/ui/header'
import { getLocale, getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

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
  title: {
    default: 'Manuel Bento - Software Developer',
    template: '%s | MB'
  },
  description: 'Apaixonado por tecnologia, especializado em Desenvolvimento Frontend.',
  keywords: ["developer","portfolio","frontend","manuelbento19","Manuel Bento"],
  openGraph: {
    title: 'Manuel Bento',
    description: 'Apaixonado por tecnologia, especializado em Desenvolvimento Frontend.',
    url: 'https://manuel-bento.vercel.com/og.png',
    siteName: 'Manuel Bento',
    images: [
      {
        url: 'https://manuel-bento.vercel.com/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'pt-PT',
    type: 'website',
  },
  twitter: {
    title: "Manuel Bento",
    card: "summary_large_image"
  },
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default async function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(geistSans.variable, geistMono.variable, 'antialiased')}
      >
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className='h-screen flex-1'>{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
