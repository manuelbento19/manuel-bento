import React from 'react'
import ArticleCard from './card'
import { allArticles } from 'contentlayer/generated'

export default function ArticleList() {
  return (
    <section className='grid grid-cols-1 gap-4 py-2 md:grid-cols-2'>
      {allArticles.reverse().map((item) => (
        <ArticleCard key={item.title} article={item} />
      ))}
    </section>
  )
}
