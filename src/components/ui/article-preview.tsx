'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { type Article } from '@/lib/articles'

type Props = {
  article: Article
}

export default function ArticlePreview({ article }: Props) {
  return (
    <motion.div
      className='pointer-events-none fixed z-50 w-80 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900'
      initial={{ opacity: 0, scale: 0.9, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 8 }}
      transition={{ duration: 0.15 }}
    >
      {article.wallpaper ? (
        <div className='relative aspect-video w-full overflow-hidden'>
          <Image
            src={article.wallpaper}
            alt={article.title}
            fill
            sizes='320px'
            className='object-cover'
          />
        </div>
      ) : null}
      <div className='space-y-2 p-4'>
        <h4 className='font-semibold text-zinc-800 dark:text-zinc-200'>
          {article.title}
        </h4>
        <p className='line-clamp-4 text-sm text-zinc-600 dark:text-zinc-400'>
          {article.description}
        </p>
      </div>
    </motion.div>
  )
}
