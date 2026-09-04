import type { Metadata } from 'next'
import Hero from '../_partials/hero'
import Skills from '../_partials/skills'
import { getMessages, getTranslations } from 'next-intl/server'
import { TranslateDTO } from '@/types'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('about.hero')
  return {
    title: t('title'),
    description: t('description')
  }
}

export default async function About() {
  const translations = await getMessages()
  const { about } = translations as TranslateDTO

  return (
    <div className='flex w-full px-4 pb-4 text-zinc-900 dark:text-zinc-200'>
      <div className='container flex flex-col space-y-8 pt-36'>
        <Hero />
        <section className='space-y-3'>
          {about.hero.data
            .slice(0, about.hero.data.length - 1)
            .map((item, index) => (
              <p
                key={index}
                className='text-sm leading-relaxed md:text-base'
              >
                {item}
              </p>
            ))}
        </section>
        <Skills />
        <p className='text-sm leading-relaxed md:text-base'>
          {about.hero.data[3]}
        </p>
        <section className='space-y-3'>
          <h2 className='text-lg font-semibold border-b pb-2'>
            {about.headings[1]}
          </h2>
          <div className='space-y-4'>
            {about.education.map((item) => (
              <div key={item.provider} className='box p-4'>
                <header className='flex items-center justify-between gap-2'>
                  <h3 className='font-semibold'>{item.provider}</h3>
                </header>
                <h2 className='text-muted-foreground'>{item.title}</h2>
                <footer>
                  <span className='text-sm text-muted-foreground'>{item.started_date} - {item.due_date}</span>
                </footer>
              </div>
            ))}
          </div>
        </section>
        <section className='space-y-3'>
          <h2 className='text-lg font-semibold border-b pb-2'>
            {about.headings[2]}
          </h2>
          <div className='space-y-4'>
            {about.license.map((item) => (
              <div key={item.provider} className='box p-4'>
                <header className='flex items-center justify-between gap-2'>
                  <a href={item.link ?? "#"} className='hover:underline' target='_blank' rel='noopener noreferrer'>
                    <h3 className='font-semibold'>{item.title}</h3>
                  </a>
                </header>
                <h2 className='text-muted-foreground'>{item.provider}</h2>
                <footer>
                  <span className='text-sm text-muted-foreground'>{item.due_date}</span>
                </footer>
              </div>
            ))}
          </div>
        </section>
        <section className='space-y-3'>
          <h2 className='text-lg font-semibold border-b pb-2'>
            {about.headings[3]}
          </h2>
          <div className='space-y-4'>
            {about.work.map((item) => (
              <div key={item.company} className='box p-4'>
                <header className='flex items-center justify-between gap-2'>
                  <h3 className='font-semibold'>{item.title}</h3>
                  <span className='text-sm text-muted-foreground'>
                    {item.started_date} - {item.due_date}
                  </span>
                </header>
                <h2 className='text-muted-foreground'>
                  {item.company}
                </h2>
                <p className='mt-2 text-sm leading-relaxed'>
                  {item.description}
                </p>
                <ul className='mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed'>
                  {item.list.map((jobKey) => (
                    <li
                      key={jobKey}
                      dangerouslySetInnerHTML={{ __html: jobKey }}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
