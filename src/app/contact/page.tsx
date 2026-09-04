import { getMessages, getTranslations } from 'next-intl/server'
import { TranslateDTO } from '@/types'
import type { Metadata } from 'next'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons'
import { Icon } from '@iconify/react'
import { socials } from '@/lib/socials'

const icons = {
  email: EnvelopeClosedIcon,
  github: GitHubLogoIcon,
  linkedin: LinkedInLogoIcon,
  twitter: TwitterLogoIcon,
  instagram: InstagramLogoIcon,
  medium: () => <Icon icon="simple-icons:medium" className='size-5' />,
  npm: () => <Icon icon="mdi:npm" className='size-5' />,
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('contact')
  return {
    title: t('title'),
    description: t('description')
  }
}

export default async function Contact() {
  const messages = await getMessages()
  const contactPage = (messages as TranslateDTO).contact

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
          {socials.map((social) => {
            const IconComp = icons[social.key as keyof typeof icons]
            return (
              <a
                key={social.key}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='box flex items-center gap-4 p-4 transition-all hover:shadow-lg hover:brightness-105'
              >
                <div className='flex size-10 items-center justify-center rounded-lg bg-secondary'>
                  <IconComp className='size-5' />
                </div>
                <div className='flex flex-col'>
                  <span className='text-xs text-muted-foreground'>
                    {social.label}
                  </span>
                  <span className='text-sm font-medium'>
                    {social.handle}
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
