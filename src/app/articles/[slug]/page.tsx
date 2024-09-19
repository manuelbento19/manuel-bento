import { allArticles } from 'contentlayer/generated'
import { MdxProvider } from '@/components/providers/mdx'
import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Tag from '@/components/ui/tag'
import { formatDate } from '@/lib/utils'

type Params = {
    slug: string
}

function getArticle({slug}:Params) {
    const article = allArticles.find((article) => article._raw.flattenedPath.replace('articles/','') === slug)
    if (!article) throw new Error("Article not found");
    return article
}

export const generateStaticParams = async () => allArticles.map((article) => ({ slug: article._raw.flattenedPath}))

export const generateMetadata = ({params}: {params: {slug: string}}) => {
    const article = getArticle(params);
    return { title: article.title }
}

export default function Page({ params }: { params: { slug: string } }){
    const article = getArticle(params);

    return (
        <div className="size-full space-y-10">
            <header>
                <Link href="/articles" className='flex items-center gap-2'><ArrowLeftIcon className="size-4"/> Voltar</Link>
            </header>
            <section className="pb-6 space-y-4">
                <header className="contents py-4">
                    <h1 className="text-lg md:text-4xl text-zinc-900 dark:text-zinc-200">{article.title}</h1>
                    <time dateTime={article.date} title={article.date} className="text-xs text-neutral-700 dark:text-zinc-400">
                        {formatDate(article.date)}
                    </time>
                </header>
                <MdxProvider content={article.body.code} />
                <footer className="inline-flex gap-2 mt-4">
                    {article.tags.map((tag) => (
                        <Tag key={tag} className="text-xs rounded-md">#{tag}</Tag>
                    ))}
                </footer>
            </section>
        </div>
    )
}