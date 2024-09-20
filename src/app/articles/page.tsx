import { Metadata } from 'next'
import ArticleList from './_partials/list'
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: 'Articles',
}

export default function Articles() {
  const translation = useTranslations("articles");

  return (
    <div className='size-full space-y-10'>
      <div className=''>
        <h2 className='text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 md:text-5xl'>{translation("title")}</h2>
        <p className='mt-6 text-sm text-zinc-600 dark:text-zinc-400 md:text-base md:leading-relaxed'>{translation("description")}</p>
      </div>
      <ArticleList />
    </div>
  )
}
