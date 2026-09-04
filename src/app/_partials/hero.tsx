import { Button } from '@/components/ui/button'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  EnvelopeClosedIcon,
} from '@radix-ui/react-icons'
import {Icon} from '@iconify/react';
import { useTranslations } from 'next-intl'
import HeroImage from './hero-image'

const links = [
  {
    link: 'mailto:manuelbentomb.223@gmail.com',
    icon: EnvelopeClosedIcon
  },
  {
    link: 'https://github.com/manuelbento19',
    icon: GitHubLogoIcon
  },
  {
    link: 'https://www.linkedin.com/in/manuel-bento/',
    icon: LinkedInLogoIcon
  },
  {
    link: 'https://twitter.com/manuelbentomb',
    icon: TwitterLogoIcon
  },
  {
    link: 'https://www.instagram.com/manuelbento.mb/',
    icon: InstagramLogoIcon
  },
  {
    link: "https://medium.com/@manuelbento19",
    icon: () => <Icon icon="simple-icons:medium" className='size-5' /> 
  },
  {
    link: "https://www.npmjs.com/~manuelbento19",
    icon: () => <Icon icon="mdi:npm" className='size-8' /> 
  }
  
]

export default function Hero() {
  const translation = useTranslations('about')

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
          {links.map(({ link, icon: Icon }) => (
            <Button size='sm' variant='outline' className='px-2.5 py-2.5 transition-all hover:scale-110' asChild key={link}>
              <a href={link} target='_blank'>
                <Icon className='size-4' />
              </a>
            </Button>
          ))}
        </div>
      </div>
      <HeroImage/>
    </section>
  )
}
