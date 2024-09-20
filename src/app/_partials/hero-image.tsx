"use client"
import { LazyComponent } from '@bentoo/react-lazy'
import Image from 'next/image'

export default function HeroImage() {
  return (
      <div className='h-64 relative w-full max-w-64 shrink-0 overflow-hidden rounded-lg p-0 grayscale transition duration-500 hover:rotate-0 hover:scale-110 hover:grayscale-0 md:rotate-12'>
        <LazyComponent fallback={<div className='figure absolute inset-0' />}>
          <Image src='/MyPicture.jpeg' alt='My picture' width={300} height={300} priority className='size-full object-cover'/>
        </LazyComponent>
      </div>
  )
}
