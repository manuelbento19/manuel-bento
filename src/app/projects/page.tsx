import { Metadata } from 'next'
import ProjectList from './_partials/list'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Projects'
}

export default function Projects() {
  const translation = useTranslations("projects");

  return (
    <div className='flex w-full px-4 pb-4'>
      <div className='container flex flex-col space-y-10 pt-32'>
        <div className=''>
          <h2 className='text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 md:text-5xl'>{translation("title")}</h2>
          <p className='mt-6 text-sm text-zinc-600 dark:text-zinc-400 md:text-base md:leading-relaxed'>{translation("description")}</p>
        </div>
        <ProjectList />
      </div>
    </div>
  )
}
