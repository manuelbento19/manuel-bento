'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import React, { useState } from 'react'
import { motion as framer, motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { type Article } from '@/lib/articles'
import { formatDate } from '@/lib/utils'
import { useLocale } from 'next-intl'
import ArticlePreview from '@/components/ui/article-preview'

type Props = {
  article: Article
}

const MotionCard = framer.create(Card)

export default function ArticleCard({ article }: Props) {
  const locale = useLocale()
  const [showPreview, setShowPreview] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY })
  }

  const previewPos = () => {
    const width = 320
    const height = 260
    const left = pos.x + 16 + width < window.innerWidth ? pos.x + 16 : pos.x - 16 - width
    const top = pos.y + 16 + height < window.innerHeight ? pos.y + 16 : pos.y - 16 - height
    return { left, top }
  }

  return (
    <MotionCard
      className='flex flex-col'
      initial={{ opacity: 0, scale: 0, translateY: 20 }}
      whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
    >
      <Link href={article.url}>
        <CardHeader className='relative flex flex-row items-center gap-0 px-0 py-3 pl-2 text-sm before:absolute before:inset-y-0 before:left-0 before:my-auto before:h-5 before:w-[.2rem] before:rounded-sm before:bg-zinc-400'>
          <span className='text-xs text-zinc-500 dark:text-zinc-200'>
            {formatDate(article.date, locale as 'pt' | 'en')}
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

      {showPreview &&
        typeof document !== 'undefined' &&
        createPortal(
          <motion.div
            className='pointer-events-none fixed z-50 shadow-2xl'
            style={{ left: previewPos().left, top: previewPos().top }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <ArticlePreview article={article} />
          </motion.div>,
          document.body
        )}
    </MotionCard>
  )
}
