import { Button } from '@/components/ui/button'
import Image from 'next/image'
import image from '@/../public/MyPicture.jpeg'
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon
} from '@radix-ui/react-icons'

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
  return (
    <section className='flex w-full flex-col items-center justify-center gap-5 pb-4 md:flex-row md:justify-between'>
      <div className=''>
        <h1 className='text-4xl font-semibold'>Manuel Bento</h1>
        <h2 className='mt-1 text-xl font-medium'>Software Developer</h2>
        <p className='mt-4 max-w-md text-xs font-normal md:text-sm'>
          Apaixonado por tecnologia, especializado em Desenvolvimento Frontend.
        </p>
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
      <div className='size-64 shrink-0 overflow-hidden rounded-lg border shadow-md grayscale transition duration-500 hover:rotate-0 hover:scale-110 hover:grayscale-0 md:rotate-12'>
        <Image
          src={image}
          alt='My picture'
          width={300}
          height={300}
          loading='lazy'
          className='size-full object-cover'
        />
      </div>
    </section>
  )
}
