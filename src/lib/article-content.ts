import { type Locale } from '@/i18n/config'
import { getArticleContent } from './articles'

const WORDS_PER_MINUTE = 200

function stripMarkdown(markdown: string): string {
  return markdown
    .split('\n')
    .filter((line) => !line.trim().startsWith('#'))
    .join(' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#>*_~|-]/g, ' ')
}

export function estimateReadTime(raw: string, locale: string): number {
  const words = stripMarkdown(raw).trim().split(/\s+/).filter(Boolean).length
  const rate = locale === 'pt' ? WORDS_PER_MINUTE * 0.85 : WORDS_PER_MINUTE
  return Math.max(1, Math.round(words / rate))
}

export async function getArticleReadingTime(_slug: string, locale: Locale): Promise<number> {
  const content = await getArticleContent(_slug)
  if (!content) return 1
  return estimateReadTime(content, locale)
}