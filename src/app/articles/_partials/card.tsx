"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import {motion as framer} from 'framer-motion';
import Link from 'next/link'
import { Article } from 'contentlayer/generated';

type Props = {
    article: Article;
}

const MotionCard = framer.create(Card)

export default function ArticleCard({article}:Props) {
  return (
    <MotionCard
        className='flex flex-col'
        initial={{ opacity: 0, scale: 0, translateY: 20 }}
        whileInView={{ opacity: 1,scale: 1,translateY: 0}}
        viewport={{ once: true }}
    >
        <Link href={article.url}>
            <CardHeader className="px-0 py-3 relative flex flex-row items-center gap-0 text-sm pl-2 before:absolute before:inset-y-0 before:my-auto before:left-0 before:h-5 before:w-[.2rem] before:bg-zinc-400 before:rounded-sm">
                <span className='text-xs text-zinc-500 dark:text-zinc-200'>14 de Setembro de 2024</span>
            </CardHeader>
            <CardContent className="px-0 space-y-2">
                <CardTitle className="text-zinc-800 dark:text-zinc-200">{article.title}</CardTitle>
                <div className="my-2 inline-flex gap-2">
                    {article.tags.map((tag) => <Button size="sm" variant="outline" key={tag} className="text-xs">#{tag}</Button>)}
                </div>
                <CardDescription className="text-pretty">{article.description}</CardDescription>
            </CardContent>
        </Link>
    </MotionCard>
  )
}
