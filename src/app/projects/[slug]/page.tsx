import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeftIcon, GitHubLogoIcon, ExternalLinkIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import Tag from '@/components/ui/tag'
import { getTranslations } from 'next-intl/server'
import { CheckIcon } from '@radix-ui/react-icons'
import { getProjectBySlug, getProjects } from '@/lib/projects'

export const generateStaticParams = () => getProjects().map((project) => ({ slug: project.slug }))

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return {
    title: project.title,
    description: project.description
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const t = await getTranslations('common')
  const tp = await getTranslations('projects')

  return (
    <div className='flex w-full justify-center px-4 pb-16 pt-36'>
      <article className='container flex flex-col space-y-8'>
        <Link
          href='/projects'
          className='flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='size-4' /> {t('back')}
        </Link>

        <div className='overflow-hidden rounded-2xl border border-border/60 bg-zinc-900 dark:border-zinc-800'>
          <Image
            src={project.wallpaper}
            alt={`${project.title} preview`}
            width={1200}
            height={700}
            priority
            className='size-full object-cover'
          />
        </div>

        <header className='space-y-5'>
          <h1 className='text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 md:text-4xl'>
            {project.title}
          </h1>
          <div className='flex flex-wrap gap-2'>
            {project.techs.map((tech) => (
              <Tag key={tech} icon={tech} title={tech} className='rounded-md' />
            ))}
          </div>
          <p className='max-w-3xl text-pretty text-muted-foreground md:text-lg'>{project.description}</p>
          {project.longDescription && (
            <p className='max-w-3xl text-pretty text-muted-foreground'>{project.longDescription}</p>
          )}
          {project.features && project.features.length > 0 && (
            <section className='space-y-4'>
              <h2 className='text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-200 md:text-2xl'>
                {tp('features')}
              </h2>
              <ul className='grid max-w-3xl gap-3 sm:grid-cols-2'>
                {project.features.map((feature) => (
                  <li key={feature} className='flex items-start gap-2 text-sm text-muted-foreground'>
                    <CheckIcon className='mt-0.5 size-4 shrink-0 text-emerald-500' />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </header>

        <footer className='flex flex-wrap items-center gap-3'>
          <Button size='sm' asChild>
            <Link href={project.link.repo} target='_blank' rel='noopener noreferrer'>
              <GitHubLogoIcon className='mr-2 size-4' />
              GitHub
            </Link>
          </Button>
          {project.link.host && (
            <Button size='sm' variant='outline' asChild>
              <Link href={project.link.host} target='_blank' rel='noopener noreferrer'>
                <ExternalLinkIcon className='mr-2 size-4' />
                Demo
              </Link>
            </Button>
          )}
        </footer>
      </article>
    </div>
  )
}