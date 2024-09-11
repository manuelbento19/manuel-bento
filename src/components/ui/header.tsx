import React from 'react'
import ThemeSwitcher from './theme-switcher'
import Link from 'next/link'

const links = [
  {
    label: 'About',
    link: '/about'
  },
  {
    label: 'Skills',
    link: '/skills'
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
    <header className='flex items-center justify-between px-4'>
      <div className='container flex items-center justify-between py-7'>
        <h1 className='text-3xl font-bold text-gray-900 dark:text-gray-200'>
          <Link href="/">MB</Link>
        </h1>
        <nav className='flex items-center gap-5 md:gap-10'>
          <ul className='flex items-center gap-5 text-gray-700 dark:text-gray-200'>
            {links.map((item) => (
              <li key={item.link} className='text-xs md:text-base'>
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  )
}
