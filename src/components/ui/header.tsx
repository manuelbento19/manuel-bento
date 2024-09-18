import React from 'react'
import ThemeSwitcher from './theme-switcher'
import Link from 'next/link'
import LanguageSelector from './language-selector'

const links = [
  {
    label: 'About',
    link: '/about'
  },
  {
    label: 'Projects',
    link: '/projects'
  },
  {
    label: 'Articles',
    link: '/articles'
  },
  {
    label: 'Contact',
    link: '/contact'
  }
]
export default function Header() {
  return (
    <header className='flex items-center justify-between px-4 fixed z-50 inset-x-0 w-full top-0 backdrop-blur-sm'>
      <div className='container flex items-center justify-between py-4'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-200'>
          <Link href="/">MB</Link>
        </h1>
        <nav className='flex items-center gap-5 md:gap-10'>
          <ul className='hidden md:flex items-center gap-5 text-gray-700 dark:text-gray-200'>
            {links.map((item) => (
              <li key={item.link} className='text-xs md:text-base'>
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1">
            <LanguageSelector/>
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}
