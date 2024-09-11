'use client'
import { useTheme } from 'next-themes'
import { Button } from './button'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()

  const switchTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button size='sm' variant='ghost' onClick={switchTheme}>
      {resolvedTheme === 'light' ? (
        <MoonIcon className='size-4' />
      ) : (
        <SunIcon className='size-4' />
      )}
    </Button>
  )
}
