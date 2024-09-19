import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'
import React from 'react'

type Props = React.ComponentProps<'div'> & {
  icon?: string
}

export default function Tag({ children, className, icon }: Props) {
  return (
    <div
      className={cn(
        'box flex w-fit items-center gap-1 rounded-3xl px-2 py-1 text-xs text-zinc-700 dark:text-zinc-300 md:text-xs',
        className
      )}
    >
      {icon && <Icon icon={icon} className='size-5' />}
      <span>{children}</span>
    </div>
  )
}
