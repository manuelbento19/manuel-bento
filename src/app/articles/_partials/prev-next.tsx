import Link from 'next/link'
import { ArrowRightIcon, ArrowLeftIcon } from '@radix-ui/react-icons'
import { type Article } from '@/lib/articles'
import { formatDate } from '@/lib/utils'
import { getTranslations } from 'next-intl/server'

type Props = {
  prev: Article | null
  next: Article | null
  locale: 'pt' | 'en'
}

export default async function PrevNext({ prev, next, locale }: Props) {
  const t = await getTranslations('common')

  const Item = ({ article, label, align }: { article: Article; label: string; align: 'start' | 'end' }) => (
    <Link
      href={article.url}
      className={`group flex flex-col gap-1 rounded-xl border border-border/50 p-4 transition-colors hover:border-emerald-500/60 ${
        align === 'end' ? 'items-end text-right' : 'items-start'
      }`}
    >
      <span className='flex items-center gap-2 text-xs uppercase tracking-wide text-muted-foreground'>
        {align === 'start' && <ArrowLeftIcon className='size-4 transition-transform group-hover:-translate-x-1' />}
        {label}
        {align === 'end' && <ArrowRightIcon className='size-4 transition-transform group-hover:translate-x-1' />}
      </span>
      <span className='text-sm font-medium text-zinc-800 dark:text-zinc-200 line-clamp-2'>{article.title}</span>
      <span className='text-xs text-zinc-500'>{formatDate(article.date, locale)}</span>
    </Link>
  )

  return (
    <nav className='mt-4 grid w-full gap-3 sm:grid-cols-2' aria-label={t('previous')}>
      {prev ? <Item article={prev} label={t('previous')} align='start' /> : <div className='hidden sm:block' />}
      {next ? <Item article={next} label={t('next')} align='end' /> : <div className='hidden sm:block' />}
    </nav>
  )
}