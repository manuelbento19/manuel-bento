import { getArticles } from '@/lib/articles'

export default function sitemap() {
  const baseUrl = 'https://bentooo.vercel.app'

  const staticRoutes = ['', '/about', '/projects', '/articles', '/contact'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8
    })
  )

  const articleRoutes = getArticles().map((article) => ({
    url: `${baseUrl}${article.url}`,
    lastModified: new Date(article.date),
    changeFrequency: 'yearly' as const,
    priority: 0.5
  }))

  return [...staticRoutes, ...articleRoutes]
}