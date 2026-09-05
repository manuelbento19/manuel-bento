import { MdxProvider } from '@/components/providers/mdx'
import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Tag from '@/components/ui/tag'
import { formatDate } from '@/lib/utils'
import { Metadata } from 'next'
import { Claps } from '@/components/ui/claps'
import { notFound } from 'next/navigation'
import { getLocale, getTranslations } from 'next-intl/server'
import { getArticle, getArticleMeta, getArticles } from '@/lib/articles'
import { getArticleReadingTime } from '@/lib/article-content'
import ReadingBar from '@/components/ui/reading-bar'
import PrevNext from '@/app/articles/_partials/prev-next'
import Giscus from '@/components/ui/giscus'

const giscusEnabled = Boolean(
  process.env.NEXT_PUBLIC_GISCUS_REPO_ID && process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID
)

export const generateStaticParams = async () =>
  getArticles().map((article) => ({ slug: article.slug }))

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const meta = getArticleMeta(slug)
  if (!meta) notFound()

  const ogImage = `/articles/${slug}/opengraph-image`

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'article',
      siteName: 'Manuel Bento',
      locale: 'pt_PT',
      url: `https://bentooo.vercel.app/articles/${slug}`,
      publishedTime: new Date(meta.date).toISOString(),
      authors: ['Manuel Bento'],
      tags: meta.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: meta.title }]
    },
    twitter: {
      title: meta.title,
      description: meta.description,
      card: 'summary_large_image',
      images: [{ url: ogImage }]
    }
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const meta = getArticleMeta(slug)
  if (!meta) notFound()
  const article = await getArticle(slug)
  if (!article) notFound()
  const locale = await getLocale()
  const t = await getTranslations('common')
  const ta = await getTranslations('articles')
  const readingTime = await getArticleReadingTime(slug, locale as 'pt' | 'en')

  const articles = getArticles()
  const index = articles.findIndex((a) => a.slug === slug)
  const prev = index > 0 ? articles[index - 1] : null
  const next = index >= 0 && index < articles.length - 1 ? articles[index + 1] : null

  return (
    <div className='size-full space-y-10'>
      <ReadingBar />
      <header>
        <Link href='/articles' className='flex items-center gap-2'>
          <ArrowLeftIcon className='size-4' /> {t('back')}
        </Link>
      </header>
      <section className='space-y-4 pb-6 text-zinc-900 dark:text-zinc-200'>
        <header className='contents py-4'>
          <h1 className='text-lg md:text-4xl'>{article.title}</h1>
          <time
            dateTime={article.date}
            title={article.date}
            className='text-xs text-neutral-700 dark:text-zinc-400'
          >
            {formatDate(article.date, locale as 'pt' | 'en')}
            <span className='mx-2 text-zinc-300 dark:text-zinc-600'>•</span>
            {readingTime} {t('readTime')}
          </time>
        </header>
        <div className='prose max-w-full dark:prose-invert'>
          <MdxProvider content={article.body!} />
        </div>
        <footer className='mt-4 inline-flex flex-wrap gap-2'>
          {article.tags.map((tag) => (
            <Tag key={tag} className='rounded-md text-xs'>
              #{tag}
            </Tag>
          ))}
        </footer>
        <Claps slug={slug}/>
        {giscusEnabled && (
          <section className='space-y-4 border-t border-border/50 pt-6'>
            <h2 className='text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-200 md:text-2xl'>
              {ta('comments')}
            </h2>
            <Giscus />
          </section>
        )}
        <PrevNext prev={prev} next={next} locale={locale as 'pt' | 'en'} />
      </section>
    </div>
  )
}
