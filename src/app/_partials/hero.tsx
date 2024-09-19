import { Button } from '@/components/ui/button'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon
} from '@radix-ui/react-icons'
import { useTranslations } from 'next-intl'
import { LazyFigure } from '@/components/ui/figure'

const links = [
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
  }
]

export default function Hero() {
  const translation = useTranslations("about");

  return (
    <section className='flex w-full flex-col items-center justify-center gap-5 pb-4 md:flex-row md:justify-between'>
      <div className=''>
        <h1 className='text-4xl font-semibold'>Manuel Bento</h1>
        <h2 className='mt-1 text-xl font-medium'>{translation("hero.title")}</h2>
        <p className='mt-4 max-w-md text-xs font-normal md:text-sm'>{translation("hero.description")}</p>
        <div className='mt-5 flex items-center gap-1.5'>
          {links.map(({ link, icon: Icon }) => (
            <Button size='sm' variant='ghost' asChild key={link}>
              <a href={link} target='_blank'>
                <Icon className='size-5' />
              </a>
            </Button>
          ))}
        </div>
      </div>
      <div className='max-w-64 w-full h-64 p-0 shrink-0 rounded-lg overflow-hidden grayscale transition duration-500 hover:rotate-0 hover:scale-110 hover:grayscale-0 md:rotate-12'>
        <LazyFigure src="/MyPicture.jpeg" alt='My picture' width={300} height={300} priority figureClass="max-h-64 h-64" className="object-cover size-full"/>
      </div>
    </section>
  )
}
