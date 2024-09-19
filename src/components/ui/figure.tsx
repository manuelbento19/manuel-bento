'use client'
import { useLazy } from '@/lib/hooks'
import { cn } from '@/lib/utils'
import { ClassValue } from 'clsx'
import NextImage from 'next/image'
import { ImageProps } from 'next/image'
import React, { useRef } from 'react'

type Props = ImageProps & {
  figureClass?: ClassValue
}

export const LazyFigure = ({ className, figureClass, alt, ...rest }: Props) => {
  const elementRef = useRef<HTMLImageElement | null>(null)
  const { visible, isPending } = useLazy({ elementRef })

  return (
    <figure ref={elementRef} className={cn('relative', figureClass)}>
      {visible && !isPending ? (
        <NextImage className={cn('size-full', className)} {...rest} alt={alt} />
      ) : (
        <div className='figure absolute inset-0' />
      )}
    </figure>
  )
}
