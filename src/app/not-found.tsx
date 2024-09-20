import { Button } from '@/components/ui/button'
import React from 'react'
import image from '@/../public/404.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Notfound() {
  return (
    <div className='h-full bg-[--background] text-zinc-900 dark:text-zinc-200'>
      <div className='container grid h-full place-content-center'>
        <div className='space-y-6 text-center'>
          <Image
            src={image}
            alt='404 page'
            width={300}
            height={300}
            loading='lazy'
            className='w-full max-w-md drop-shadow-[0_5px_5px_rgba(0,0,0,.5)] dark:drop-shadow-none'
          />
          <h1 className='text-xl font-bold md:text-3xl'>
            Porquê que estás aqui?
          </h1>
          <h2 className='text-sm font-medium md:text-base'>
            Você não deveria estar aqui.
          </h2>
          <Button size='lg' asChild>
            <Link href='/'>Volte</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
