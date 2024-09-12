import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'
import React from 'react'

type Props = React.ComponentProps<"div"> & {
    icon?: string
}

export default function Tag({children,className,icon}:Props) {
  return (
    <div className={cn('inline-flex w-fit items-center gap-1 py-1 px-2 text-xs md:text-sm box  rounded-3xl',className)}>
      {icon && <Icon icon={icon} className='size-5'/>}
      <span>{children}</span>
    </div>
  )
}
