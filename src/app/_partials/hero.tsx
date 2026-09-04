import { Button } from '@/components/ui/button'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons'
import {Icon} from '@iconify/react';
import { getTranslations } from 'next-intl/server'
import HeroImage from './hero-image'
import { socials } from '@/lib/socials'

const icons = {
  email: EnvelopeClosedIcon,
  github: GitHubLogoIcon,
  linkedin: LinkedInLogoIcon,
  twitter: TwitterLogoIcon,
  instagram: InstagramLogoIcon,
  medium: () => <Icon icon="simple-icons:medium" className='size-5' />,
  npm: () => <Icon icon="mdi:npm" className='size-8' />
}

export default async function Hero() {
  const translation = await getTranslations('about')

  return (
    <section className='flex w-full flex-col items-center justify-center gap-8 pb-4 text-zinc-900 dark:text-zinc-200 md:flex-row md:justify-between'>
      <div className='space-y-4'>
        <div>
          <h1 className='text-4xl font-bold tracking-tight md:text-5xl'>Manuel Bento</h1>
          <h2 className='mt-2 text-lg font-medium text-muted-foreground md:text-xl'>
            {translation('hero.title')}
          </h2>
        </div>
        <p className='max-w-md text-sm leading-relaxed md:text-base'>
          {translation('hero.description')}
        </p>
        <div className='flex items-center gap-2'>
          {socials.map((social) => {
            const Icon = icons[social.key as keyof typeof icons]
            return (
              <Button size='sm' variant='outline' className='px-2.5 py-2.5 transition-all hover:scale-110' asChild key={social.key}>
                <a href={social.url} target='_blank' rel='noopener noreferrer' aria-label={social.label}>
                  <Icon className='size-4' />
                </a>
              </Button>
            )
          })}
        </div>
      </div>
      <HeroImage/>
    </section>
  )
}
