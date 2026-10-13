import type { Metadata } from 'next'
import Image from 'next/image'
import { getMessages, getTranslations } from 'next-intl/server'
import { Mail, MapPin, Phone, Globe, Github, Linkedin } from 'lucide-react'
import { Constants } from '@/lib'
import { TranslateDTO } from '@/types'
import PrintButton from './_partials/print-button'

function renderStrong(content: string) {
  const parts = content.split(/(<strong>.*?<\/strong>)/g)

  return parts.map((part, index) => {
    const match = /^<strong>(.*?)<\/strong>$/.exec(part)
    if (match)
      return (
        <strong key={index} className='font-semibold'>
          {match[1]}
        </strong>
      )
    return <span key={index}>{part}</span>
  })
}

function trimUrl(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

const techNames: Record<string, string> = {
  'ri:nextjs-fill': 'Next.js',
  'mdi:react': 'React',
  'bxl:typescript': 'TypeScript',
  'mdi:tailwind': 'Tailwind CSS',
  'simple-icons:zod': 'Zod',
  'simple-icons:reacthookform': 'React Hook Form',
  'akar-icons:postgresql-fill': 'PostgreSQL',
  'simple-icons:vercel': 'Vercel',
  'simple-icons:pnpm': 'pnpm',
  'simple-icons:radixui': 'Radix UI',
  'simple-icons:vite': 'Vite',
  'mdi:npm': 'npm',
  'devicon-plain:css3': 'CSS',
  'file-icons:styledcomponents': 'styled-components',
  'uim:vuejs': 'Vue',
  'mdi:sass': 'Sass',
  'mdi:nodejs': 'Node.js',
  'carbon:tcp-ip-service': 'TCP/IP',
  'mdi:docker': 'Docker',
  'simple-icons:ollama': 'Ollama',
  'mdi:angular': 'Angular',
  'simple-icons:express': 'Express',
  'simple-icons:prisma': 'Prisma',
  'simple-icons:openai': 'OpenAI',
  'ph:phosphor-logo': 'Phosphor Icons'
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('cv')
  return {
    title: t('title'),
    description: t('title')
  }
}

function Section({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className='space-y-2'>
      <h2 className='border-b pb-1 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-900 dark:text-zinc-100'>
        {title}
      </h2>
      {children}
    </section>
  )
}

export default async function CV() {
  const messages = await getMessages()
  const { about, cv } = messages as TranslateDTO
  const { cvContact } = Constants

  return (
    <div className='cv w-full px-4 pb-16 pt-32 text-zinc-800 dark:text-zinc-200'>
      <div className='mx-auto max-w-4xl'>
        <div className='no-print mb-4 flex justify-end'>
          <PrintButton label={cv.print} />
        </div>

        <div className='cv-sheet overflow-hidden border bg-card p-6 text-[12px] leading-snug shadow-xs'>
          <header className='grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto]'>
            <div className='space-y-2'>
              <div className='flex items-center gap-4'>
                <Image
                  src='/myself-square.png'
                  alt='Manuel Bento'
                  width={96}
                  height={96}
                  className='size-20 shrink-0 rounded-full object-cover'
                />
                <div className='min-w-0'>
                  <h1 className='text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50'>
                    Manuel Bento
                  </h1>
                  <p className='text-[12px] font-medium text-zinc-600 dark:text-zinc-300'>
                    {about.hero.title}
                  </p>
                </div>
              </div>
              <p className='text-[11px] leading-snug text-zinc-500'>
                {cv.bio}
              </p>
            </div>
            <ul className='space-y-1 text-[11px] sm:min-w-[210px]'>
              <li className='flex items-center gap-2'>
                <MapPin className='size-3.5 shrink-0 text-zinc-400' />
                <span>{cvContact.location}</span>
              </li>
              <li className='flex items-center gap-2'>
                <Phone className='size-3.5 shrink-0 text-zinc-400' />
                <span>{cvContact.phone}</span>
              </li>
              <li className='flex items-center gap-2'>
                <Mail className='size-3.5 shrink-0 text-zinc-400' />
                <a
                  href={`mailto:${cvContact.email}`}
                  className='truncate hover:underline'
                >
                  {cvContact.email}
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <Mail className='size-3.5 shrink-0 text-zinc-400' />
                <a
                  href={`mailto:${cvContact.emailAlt}`}
                  className='truncate hover:underline'
                >
                  {cvContact.emailAlt}
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <Globe className='size-3.5 shrink-0 text-zinc-400' />
                <a
                  href={cvContact.website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='truncate hover:underline'
                >
                  {trimUrl(cvContact.website)}
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <Globe className='size-3.5 shrink-0 text-zinc-400' />
                <a
                  href={cvContact.websiteAlt}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='truncate hover:underline'
                >
                  {trimUrl(cvContact.websiteAlt)}
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <Github className='size-3.5 shrink-0 text-zinc-400' />
                <a
                  href={cvContact.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='truncate hover:underline'
                >
                  {trimUrl(cvContact.github)}
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <Linkedin className='size-3.5 shrink-0 text-zinc-400' />
                <a
                  href={cvContact.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='truncate hover:underline'
                >
                  {trimUrl(cvContact.linkedin)}
                </a>
              </li>
            </ul>
          </header>

          <div className='mt-5 grid sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] sm:gap-6'>
            <aside className='cv-sidebar space-y-5 border-b pb-5 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6'>
              <Section title={cv.skills}>
                <div className='space-y-1.5'>
                  {Constants.skills.map((category) => (
                    <div key={category.name}>
                      <h3 className='text-[10px] font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400'>
                        {category.name}
                      </h3>
                      <p className='text-[11px] leading-snug'>
                        {category.list.map((skill) => skill.name).join(' · ')}
                      </p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section title={cv.languages}>
                <ul className='space-y-0.5 text-[11px]'>
                  {cv.languagesList.map((language) => (
                    <li
                      key={language.name}
                      className='flex items-center justify-between gap-2'
                    >
                      <span>{language.name}</span>
                      <span className='text-zinc-500'>{language.level}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            </aside>

            <main className='space-y-5 pt-5 sm:pt-0'>
              <Section title={cv.experience}>
                <div className='space-y-4'>
                  {about.work.map((item) => (
                    <article key={item.company}>
                      <header className='flex flex-wrap items-baseline justify-between gap-x-2'>
                        <h3 className='font-semibold text-zinc-900 dark:text-zinc-100'>
                          {item.title}
                        </h3>
                        <span className='text-[10px] text-zinc-500'>
                          {item.started_date} – {item.due_date}
                        </span>
                      </header>
                      <p className='text-[11px] font-medium text-zinc-500'>
                        {item.company}
                      </p>
                      <ul className='mt-1 list-disc space-y-0.5 pl-4'>
                        {item.list.slice(0, 3).map((entry) => (
                          <li key={entry} className='line-clamp-2'>
                            {renderStrong(entry)}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </Section>

              <Section title={cv.education}>
                <div className='space-y-2'>
                  {about.education.map((item) => (
                    <article key={item.provider}>
                      <header className='flex flex-wrap items-baseline justify-between gap-x-2'>
                        <h3 className='font-semibold text-zinc-900 dark:text-zinc-100'>
                          {item.provider}
                        </h3>
                        <span className='text-[10px] text-zinc-500'>
                          {item.started_date} – {item.due_date}
                        </span>
                      </header>
                      <p className='text-[11px] text-zinc-500'>{item.title}</p>
                    </article>
                  ))}
                </div>
              </Section>

              <Section title={cv.certifications}>
                <article>
                  <header className='flex flex-wrap items-baseline justify-between gap-x-2'>
                    <h3 className='font-semibold text-zinc-900 dark:text-zinc-100'>
                      {about.license[0].provider}
                    </h3>
                    <span className='text-[10px] text-zinc-500'>
                      {about.license[0].due_date}
                    </span>
                  </header>
                  <p className='text-[11px] text-zinc-500'>
                    {about.license[0].title}
                  </p>
                </article>
              </Section>
            </main>
          </div>
        </div>

        <div className='cv-sheet mt-6 break-before-page border bg-card p-6 text-[12px] leading-snug shadow-xs'>
          <Section title={cv.projects}>
            <div className='grid gap-x-8 gap-y-4 sm:grid-cols-2'>
              {Constants.projects.map((project) => {
                const url = project.link.host ?? project.link.repo
                return (
                  <article
                    key={project.title}
                    className='flex flex-col gap-0.5'
                  >
                    <header className='flex items-baseline justify-between gap-2'>
                      <h3 className='font-semibold text-zinc-900 dark:text-zinc-100'>
                        {project.title}
                      </h3>
                      {url && (
                        <a
                          href={url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='shrink-0 text-[10px] text-zinc-400 hover:underline'
                        >
                          {trimUrl(url)}
                        </a>
                      )}
                    </header>
                    <p className='line-clamp-2 text-[11px] leading-snug'>
                      {project.description}
                    </p>
                    <p className='text-[10px] leading-snug text-zinc-500'>
                      <span className='font-semibold'>
                        {cv.technologies}:
                      </span>{' '}
                      {project.techs
                        .map((tech) => techNames[tech] ?? tech)
                        .join(', ')}
                    </p>
                  </article>
                )
              })}
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
}
