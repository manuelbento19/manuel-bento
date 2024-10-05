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
    <section className='flex w-full flex-col items-center justify-center gap-5 pb-4 text-zinc-900 dark:text-zinc-200 md:flex-row md:justify-between'>
      <div className=''>
        <h1 className='text-4xl font-semibold'>Manuel Bento</h1>
        <h2 className='mt-1 text-xl font-medium'>
          {translation('hero.title')}
        </h2>
        <p className='mt-4 max-w-md text-xs font-normal md:text-sm'>
          {translation('hero.description')}
        </p>
        <div className='mt-5 flex items-center gap-1'>
          {links.map(({ link, icon: Icon }) => (
            <Button size='sm' variant='ghost' className='px-1 py-1' asChild key={link}>
              <a href={link} target='_blank'>
                <Icon className='size-5' />
              </a>
            </Button>
          ))}
        </div>
      </div>
      <HeroImage/>
    </section>
  )
}
