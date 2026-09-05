import { getArticles } from '@/lib/articles'

const siteUrl = 'https://bentooo.vercel.app'

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function toRssDate(date: string): string {
  return new Date(date).toUTCString()
}

function articlesFeed() {
  const articles = getArticles()

  const items = articles
    .map((article) => `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${siteUrl}${article.url}</link>
      <guid isPermaLink="true">${siteUrl}${article.url}</guid>
      <pubDate>${toRssDate(article.date)}</pubDate>
      <description>${escapeXml(article.description)}</description>
    </item>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Manuel Bento — Artigos</title>
    <link>${siteUrl}/articles</link>
    <description>Artigos e conhecimentos de software por Manuel Bento.</description>
    <language>pt</language>
    <lastBuildDate>${toRssDate(new Date().toISOString())}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`
}

export const dynamic = 'force-static'

export function GET() {
  return new Response(articlesFeed(), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}