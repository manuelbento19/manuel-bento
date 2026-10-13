import { getLocale } from 'next-intl/server'
import { getProjects } from '@/lib/projects'
import React from 'react'
import ProjectCard from './card'

export default async function ProjectList() {
  const locale = await getLocale()
  const projects = getProjects(locale)

  return (
    <section className='grid grid-cols-1 gap-4 py-2 md:grid-cols-2'>
      {projects.map((item) => (
        <ProjectCard key={item.title} project={item} />
      ))}
    </section>
  )
}
