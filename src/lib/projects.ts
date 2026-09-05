import { projects as data } from './constants'
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

export function getProjects(): ProjectWithSlug[] {
  return data.map((project) => ({ ...project, slug: getProjectSlug(project.title) }))
}

export function getProjectBySlug(slug: string): ProjectWithSlug | null {
  return getProjects().find((project) => project.slug === slug) ?? null
}