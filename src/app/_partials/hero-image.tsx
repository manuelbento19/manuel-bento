"use client"
import { LazyComponent } from '@bentoo/react-lazy'
import Image from 'next/image'

export default function HeroImage() {
  return (
      <div className='relative h-64 w-full max-w-64 shrink-0 overflow-hidden rounded-2xl p-0 grayscale transition-all duration-500 hover:rotate-0 hover:scale-105 hover:grayscale-0 hover:shadow-2xl md:rotate-6'>
        <LazyComponent fallback={<div className='figure absolute inset-0' />}>
          <Image src='/MyPicture.jpeg' alt='Manuel Bento' width={300} height={300} priority className='size-full object-cover'/>
        </LazyComponent>
      </div>
  )
}
