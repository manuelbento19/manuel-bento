import { Metadata } from 'next'
import Hero from '../_partials/hero'
import Skills from '../_partials/skills'
import { useMessages } from 'next-intl'
import { TranslateDTO } from '@/types'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Software Developer apaixonado por tecnologia, especializado em Desenvolvimento Frontend.'
}

export default function About() {
  const { about } = useMessages() as TranslateDTO

  return (
    <div className='flex w-full px-4 pb-4 text-zinc-900 dark:text-zinc-200'>
      <div className='container flex flex-col space-y-6 pt-32'>
        <Hero />
        <section className='space-y-2'>
          {about.hero.data
            .slice(0, about.hero.data.length - 1)
            .map((item, index) => (
              <p
                key={index}
                className='text-xs md:block md:text-sm md:leading-relaxed'
              >
                {item}
              </p>
            ))}
        </section>
        <Skills />
        <p className='text-xs md:block md:text-sm md:leading-relaxed'>
          {about.hero.data[3]}
        </p>
        <section className='space-y-2'>
          <h2 className='my-1.5 border-0 border-b pb-2 text-lg font-semibold'>
            {about.headings[1]}
          </h2>
          <div className='space-y-2 divide-y'>
            {about.education.map((item) => (
              <div key={item.provider}>
                <header className='flex items-center justify-between gap-2 pt-2'>
                  <h3 className='font-semibold'>{item.provider}</h3>
                </header>
                <h2 className='text-gray-600 dark:text-gray-300'>{item.title}</h2>
                <footer>
                  <span className='text-gray-500 dark:text-gray-200'>{item.started_date} - {item.due_date}</span>
                </footer>
              </div>
            ))}
          </div>
        </section>
        <section className='space-y-2'>
          <h2 className='my-1.5 border-0 border-b pb-2 text-lg font-semibold'>
            {about.headings[2]}
          </h2>
          <div className='space-y-2 divide-y'>
            {about.license.map((item) => (
              <div key={item.provider}>
                <header className='flex items-center justify-between gap-2 pt-2'>
                  <a href={item.link ?? "#"} className='hover:underline' target='_blank'>
                    <h3 className='font-semibold'>{item.title}</h3>
                  </a>
                </header>
                <h2 className='text-gray-600 dark:text-gray-300'>{item.provider}</h2>
                <footer>
                  <span className='text-gray-500 dark:text-gray-200'>{item.due_date}</span>
                </footer>
              </div>
            ))}
          </div>
        </section>
        <section className='space-y-2'>
          <h2 className='my-1.5 border-0 border-b pb-2 text-lg font-semibold'>
            {about.headings[3]}
          </h2>
          <div className='space-y-2 divide-y'>
            {about.work.map((item) => (
              <div key={item.company}>
                <header className='flex items-center justify-between gap-2 pt-2'>
                  <h3 className='font-semibold'>{item.title}</h3>
                  <span>
                    {item.started_date} - {item.due_date}
                  </span>
                </header>
                <h2 className='text-gray-600 dark:text-gray-300'>
                  {item.company}
                </h2>
                <p className='mt-2 text-xs md:block md:text-sm md:leading-relaxed'>
                  {item.description}
                </p>
                <ul className='mt-2 list-disc space-y-2 pl-10 text-xs md:block md:text-sm md:leading-relaxed'>
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
