import { format, parseISO } from 'date-fns'
import { allArticles } from 'contentlayer/generated'
import { pt } from 'date-fns/locale'
import { MdxProvider } from '@/components/providers/mdx'
import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

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
        <div className='flex w-full px-4'>
            <div className='container flex flex-col pt-32 space-y-10'>
                <div className="xl:relative">
                    <div className="max-w-2xl mx-auto">
                    <Link href="/articles" className="items-center justify-center lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-5 xl:mt-0 mb-8 flex h-10 w-10 rounded-full">
                        <ArrowLeftIcon className="w-4 h-4 " />
                    </Link>
                    <article className="pb-6 prose dark:prose-invert">
                        <header className="flex flex-col">
                            <h1 className="mt-6 title-primary">{article.title}</h1>
                            <div className="inline-flex gap-2 mt-4">
                                {article.tags.map((tag) => (
                                    <div key={tag} className="px-2 py-1 text-xs rounded-md box-gen before:content-['#']">{tag}</div>
                                ))}
                            </div>
                            <div className="flex items-center order-first text-base text-neutral-700 dark:text-zinc-400">
                                <time dateTime={article.date} className="text-xs text-gray-600">
                                    {format(parseISO(article.date), 'd, LLLL, yyyy',{locale: pt})}
                                </time>
                            </div>
                        </header>
                        <MdxProvider content={article.body.code} />
                    </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*

 <div className="mx-auto max-w-xl py-8">
                    <div className="mb-8 text-center">
                        <time dateTime={article.date} className="mb-1 text-xs text-gray-600">
                        {format(parseISO(article.date), 'LLLL d, yyyy',{locale: pt})}
                        </time>
                        <h1 className="text-3xl font-bold">{article.title}</h1>
                    </div>
                </div>

*/