import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import ThemeProvider from '@/components/providers/theme'
import { cn } from '@/lib/utils'
import Header from '@/components/ui/header'
import { getLocale, getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import {Analytics} from '@vercel/analytics/next';

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
  description: 'Passionate about technology, specialized in Frontend Development.',
  keywords: ["developer","portfolio","frontend","manuelbento19","Manuel Bento"],
  openGraph: {
    title: 'Manuel Bento',
    description: 'Passionate about technology, specialized in Frontend Development.',
    url: 'https://bentooo.vercel.app/og.png',
    siteName: 'Manuel Bento',
    images: [
      {
        url: 'https://bentooo.vercel.app/og.png',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'pt-PT',
    type: 'website',
  },
  twitter: {
    title: "Manuel Bento",
    card: "summary_large_image",
    images: [
      {
        url: 'https://bentooo.vercel.app/og.png',
        width: 1920,
        height: 1080,
      },
    ],
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
      <Analytics/>
    </html>
  )
}
