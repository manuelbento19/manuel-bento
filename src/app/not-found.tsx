import { Button } from '@/components/ui/button';
import React from 'react';
import image from '@/../public/404.png';
import Image from 'next/image';

export default function Notfound() {
  return (
    <div className='h-full bg-[--background]'>
      <div className='h-full container grid place-content-center'>
        <div className="space-y-6 text-center">
          <Image src={image}  alt='404 page' width={300} height={300} loading='lazy' className='max-w-md w-full'/>
          <h1 className='font-bold text-xl md:text-3xl'>Porquê que estás aqui?</h1>
          <h2 className='font-medium text-sm md:text-base'>Você não deveria estar aqui.</h2>
          <Button size="lg" >Volte</Button>
        </div>
      </div>
    </div>
  )
}
