'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import React from 'react'
import { motion as framer } from 'framer-motion'
import Link from 'next/link'
import { Article } from 'contentlayer/generated'
import { formatDate } from '@/lib/utils'

type Props = {
  article: Article
}

const MotionCard = framer.create(Card)

export default function ArticleCard({ article }: Props) {
  return (
    <MotionCard
      className='flex flex-col'
      initial={{ opacity: 0, scale: 0, translateY: 20 }}
      whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
      viewport={{ once: true }}
    >
      <Link href={article.url}>
        <CardHeader className='relative flex flex-row items-center gap-0 px-0 py-3 pl-2 text-sm before:absolute before:inset-y-0 before:left-0 before:my-auto before:h-5 before:w-[.2rem] before:rounded-sm before:bg-zinc-400'>
          <span className='text-xs text-zinc-500 dark:text-zinc-200'>
            {formatDate(article.date)}
          </span>
        </CardHeader>
        <CardContent className='space-y-2 px-0'>
          <CardTitle className='text-zinc-800 dark:text-zinc-200'>
            {article.title}
          </CardTitle>
          <div className='my-2 inline-flex gap-2 flex-wrap'>
            {article.tags.map((tag) => (
              <Button size='sm' variant='outline' key={tag} className='text-xs'>
                #{tag}
              </Button>
            ))}
          </div>
          <CardDescription className='text-pretty'>
            {article.description}
          </CardDescription>
        </CardContent>
      </Link>
    </MotionCard>
  )
}
