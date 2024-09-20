import React from 'react'
import ThemeSwitcher from './theme-switcher'
import Link from 'next/link'
import LanguageSelector from './language-selector'
import { useMessages } from 'next-intl'
import Image from 'next/image'

type LayoutProps = {
  header: {
    label: string
    link: string
  }[]
}

export default function Header() {
  const messages = useMessages()
  const layout: unknown = messages.layout
  const { header } = layout as LayoutProps

  return (
    <header className='fixed inset-x-0 top-0 z-50 flex w-full items-center justify-between px-4 backdrop-blur-sm'>
      <div className='container flex items-center justify-between py-4'>
        <Link href='/' className='h-full'>
          <Image src="/logo.png" alt='MB' title='MB' width={200} height={200} loading='lazy' className='w-12 invert dark:invert-0'/>
        </Link>
        <nav className='flex items-center gap-5 md:gap-10'>
          <ul className='hidden items-center gap-5 text-gray-700 dark:text-gray-200 md:flex'>
            {header?.map((item) => (
              <li key={item.label} className='text-xs md:text-base'>
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className='flex items-center gap-1'>
            <LanguageSelector />
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}
