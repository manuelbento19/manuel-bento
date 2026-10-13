import { projects as data } from './constants'
import { projectsEn } from './projects-en'
import { type Project } from '@/types'

export type ProjectWithSlug = Project & { slug: string }

export function getProjectSlug(title: string): string {
  return title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/@/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function localizeProject(project: Project, slug: string, locale: string): Project {
  const translation = locale === 'en' ? projectsEn[slug] : undefined
  return translation ? { ...project, ...translation } : project
}

export function getProjects(locale: string = 'pt'): ProjectWithSlug[] {
  return data.map((project) => {
    const slug = getProjectSlug(project.title)
    return { ...localizeProject(project, slug, locale), slug }
  })
}

export function getProjectBySlug(slug: string, locale: string = 'pt'): ProjectWithSlug | null {
  return getProjects(locale).find((project) => project.slug === slug) ?? null
}