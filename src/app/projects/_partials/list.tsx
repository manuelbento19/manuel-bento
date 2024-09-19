import { Constants } from '@/lib'
import React from 'react'
import ProjectCard from './card'

export default function ProjectList() {
  return (
    <section className='grid grid-cols-1 gap-4 py-2 md:grid-cols-2'>
      {Constants.projects.map((item) => (
        <ProjectCard key={item.title} project={item} />
      ))}
    </section>
  )
}
