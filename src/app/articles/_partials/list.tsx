import React from 'react'
import ArticleCard from './card'
import { getArticles } from '@/lib/articles'

export default function ArticleList() {
  const articles = getArticles()

  return (
    <section className='grid grid-cols-1 gap-4 py-2 md:grid-cols-2'>
      {articles.map((item) => (
        <ArticleCard key={item.slug} article={item} />
      ))}
    </section>
  )
}
