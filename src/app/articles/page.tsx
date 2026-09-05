import type { Metadata } from 'next'
import ArticleList from './_partials/list'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { RssIcon } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('articles')
  return {
    title: t('title'),
    description: t('description')
  }
}

export default async function Articles() {
  const translation = await getTranslations("articles");

  return (
    <div className='flex w-full px-4 pb-4'>
      <div className='container flex flex-col space-y-10 pt-4'>
        <div className='space-y-4'>
          <div className='flex items-start justify-between gap-4'>
            <h1 className='text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 md:text-4xl'>{translation("title")}</h1>
            <Link
              href='/feed.xml'
              target='_blank'
              aria-label='RSS feed'
              className='mt-1 rounded-lg border border-border/60 p-2 text-muted-foreground transition-colors hover:border-orange-500/60 hover:text-orange-500'
            >
              <RssIcon className='size-4' />
            </Link>
          </div>
          <p className='text-sm text-muted-foreground md:text-base md:leading-relaxed'>{translation("description")}</p>
        </div>
        <ArticleList />
      </div>
    </div>
  )
}
