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

export const generateStaticParams = async () =>
  getArticles().map((article) => ({ slug: article.slug }))

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const meta = getArticleMeta(slug)
  if (!meta) notFound()

  const ogImage = `https://bentooo.vercel.app${meta.wallpaper ?? "/og.png"}`;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      images: [ogImage]
    },
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

  return (
    <div className='size-full space-y-10'>
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
      </section>
    </div>
  )
}
