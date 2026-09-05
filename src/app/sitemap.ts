import { getArticles } from '@/lib/articles'
import { getProjects } from '@/lib/projects'

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

  const projectRoutes = getProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }))

  return [...staticRoutes, ...articleRoutes, ...projectRoutes]
}