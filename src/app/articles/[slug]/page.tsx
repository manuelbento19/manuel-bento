import { allArticles } from 'contentlayer/generated'
import { MdxProvider } from '@/components/providers/mdx'
import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Tag from '@/components/ui/tag'
import { formatDate } from '@/lib/utils'
import { Metadata } from 'next'

type Params = {
  slug: string
}

function getArticle({ slug }: Params) {
  const article = allArticles.find(
    (article) => article._raw.flattenedPath.replace('articles/', '') === slug
  )
  if (!article) throw new Error('Article not found')
  return article
}

export const generateStaticParams = async () =>
  allArticles.map((article) => ({ slug: article._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) : Metadata => {
  const {title,description,wallpaper} = getArticle(params);
  const ogImage = `https://bentooo.vercel.app${wallpaper ?? "/og.png"}`;

  return { 
    title,
    description,
    openGraph: {
      title,
      description,
      url: ogImage,
      siteName: 'Manuel Bento',
      images: [
        {
          url: ogImage,
          width: 1920,
          height: 1080,
        },
      ],
      locale: 'pt-PT',
      type: 'website',
    },
    twitter: {
      title,
      card: "summary_large_image",
      images: [
        {
          url: ogImage,
          width: 1920,
          height: 1080,
        },
      ],
    },
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const article = getArticle(params)

  return (
    <div className='size-full space-y-10'>
      <header>
        <Link href='/articles' className='flex items-center gap-2'>
          <ArrowLeftIcon className='size-4' /> Voltar
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
            {formatDate(article.date)}
          </time>
        </header>
        <div className='prose max-w-full dark:prose-invert'>
          <MdxProvider content={article.body.code} />
        </div>
        <footer className='mt-4 inline-flex flex-wrap gap-2'>
          {article.tags.map((tag) => (
            <Tag key={tag} className='rounded-md text-xs'>
              #{tag}
            </Tag>
          ))}
        </footer>
      </section>
    </div>
  )
}
