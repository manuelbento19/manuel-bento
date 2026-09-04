import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

export type Article = {
  slug: string
  title: string
  description: string
  wallpaper?: string
  tags: string[]
  date: string
  url: string
  body?: string
}

const articlesDir = path.join(process.cwd(), 'content', 'articles')

function toIsoString(date: unknown): string {
  if (date instanceof Date) return date.toISOString()
  return new Date(date as string).toISOString()
}

function parseFile(file: string): Article {
  const raw = fs.readFileSync(path.join(articlesDir, file), 'utf8')
  const { data } = matter(raw)
  const slug = file.replace(/\.mdx$/, '')

  return {
    slug,
    title: data.title,
    description: data.description,
    wallpaper: data.wallpaper,
    tags: data.tags ?? [],
    date: toIsoString(data.date),
    url: `/articles/${slug}`
  }
}

export function getArticles(): Article[] {
  return fs
    .readdirSync(articlesDir)
    .filter((file) => file.endsWith('.mdx'))
    .map(parseFile)
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
}

export function getArticleMeta(slug: string): Article | null {
  const file = `${slug}.mdx`
  if (!fs.existsSync(path.join(articlesDir, file))) return null
  return parseFile(file)
}

export async function getArticle(slug: string): Promise<Article | null> {
  const meta = getArticleMeta(slug)
  if (!meta) return null

  const raw = fs.readFileSync(path.join(articlesDir, `${slug}.mdx`), 'utf8')
  const { content } = matter(raw)
  const { code } = await bundleMDX({ source: content, cwd: articlesDir })

  return { ...meta, body: code }
}