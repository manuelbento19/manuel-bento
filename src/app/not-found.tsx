import { Button } from '@/components/ui/button'
import React from 'react'
import image from '@/../public/404.png'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Notfound() {
  const translation = useTranslations("notFound");
  return (
    <div className='min-h-screen bg-[--background] text-zinc-900 dark:text-zinc-200'>
      <div className='container grid min-h-screen place-content-center'>
        <div className='space-y-6 text-center'>
          <Image
            src={image}
            alt='404 page'
            width={300}
            height={300}
            loading='lazy'
            className='mx-auto w-full max-w-md drop-shadow-[0_5px_5px_rgba(0,0,0,.5)] dark:drop-shadow-none'
          />
          <h1 className='text-2xl font-bold md:text-3xl'>{translation("title")}</h1>
          <p className='text-sm text-muted-foreground md:text-base'>{translation("subtitle")}</p>
          <Button size='lg' asChild>
            <Link href='/'>{translation("action")}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
