'use client'
import { useMessages } from 'next-intl'
import { TranslateDTO } from '@/types'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons'
import { Icon } from '@iconify/react'

const contacts = [
  {
    label: 'Email',
    value: 'manuelbentomb.223@gmail.com',
    link: 'mailto:manuelbentomb.223@gmail.com',
    icon: EnvelopeClosedIcon,
  },
  {
    label: 'GitHub',
    value: 'manuelbento19',
    link: 'https://github.com/manuelbento19',
    icon: GitHubLogoIcon,
  },
  {
    label: 'LinkedIn',
    value: 'manuel-bento',
    link: 'https://www.linkedin.com/in/manuel-bento/',
    icon: LinkedInLogoIcon,
  },
  {
    label: 'Twitter',
    value: '@manuelbentomb',
    link: 'https://twitter.com/manuelbentomb',
    icon: TwitterLogoIcon,
  },
  {
    label: 'Instagram',
    value: '@manuelbento.mb',
    link: 'https://www.instagram.com/manuelbento.mb/',
    icon: InstagramLogoIcon,
  },
  {
    label: 'Medium',
    value: '@manuelbento19',
    link: 'https://medium.com/@manuelbento19',
    icon: () => <Icon icon="simple-icons:medium" className='size-5' />,
  },
  {
    label: 'npm',
    value: '~manuelbento19',
    link: 'https://www.npmjs.com/~manuelbento19',
    icon: () => <Icon icon="mdi:npm" className='size-5' />,
  },
]

export default function Contact() {
  const translation = useMessages() as TranslateDTO
  const contactPage = translation.contact

  return (
    <div className='flex w-full px-4 pb-4 text-zinc-900 dark:text-zinc-200'>
      <div className='container flex flex-col space-y-6 pt-36'>
        <section className='space-y-2'>
          <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>
            {contactPage.title}
          </h1>
          <p className='text-sm leading-relaxed md:text-base'>
            {contactPage.description}
          </p>
        </section>

        <section className='space-y-3'>
          {contacts.map((contact) => {
            const IconComp = contact.icon
            return (
              <a
                key={contact.label}
                href={contact.link}
                target='_blank'
                rel='noopener noreferrer'
                className='box flex items-center gap-4 p-4 transition-all hover:shadow-lg hover:brightness-105'
              >
                <div className='flex size-10 items-center justify-center rounded-lg bg-secondary'>
                  <IconComp className='size-5' />
                </div>
                <div className='flex flex-col'>
                  <span className='text-xs text-muted-foreground'>
                    {contact.label}
                  </span>
                  <span className='text-sm font-medium'>
                    {contact.value}
                  </span>
                </div>
              </a>
            )
          })}
        </section>
      </div>
    </div>
  )
}
