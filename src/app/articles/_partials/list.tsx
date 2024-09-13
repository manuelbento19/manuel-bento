import { Constants } from '@/lib'
import React from 'react'
import ArticleCard from './card'

export default function ArticleList() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
            {Constants.articles.map((item)=><ArticleCard key={item.title} article={item}/>)}
        </section>
    )
}
