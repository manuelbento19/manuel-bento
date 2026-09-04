import type { Metadata } from 'next'
import ArticleList from './_partials/list'
import { getTranslations } from 'next-intl/server';

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
      <div className='container flex flex-col space-y-10 pt-36'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 md:text-4xl'>{translation("title")}</h1>
          <p className='mt-4 text-sm text-muted-foreground md:text-base md:leading-relaxed'>{translation("description")}</p>
        </div>
        <ArticleList />
      </div>
    </div>
  )
}
