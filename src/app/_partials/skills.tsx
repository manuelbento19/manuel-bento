import { Button } from '@/components/ui/button'
import { Constants } from '@/lib'
import { Card, CardContent } from '@/components/ui/card'
import Tag from '@/components/ui/tag'
import { Icon } from '@iconify/react'
import { TranslateDTO } from '@/types'
import { useMessages } from 'next-intl'

export default function Skills() {
  const {
    about: { headings }
  } = useMessages() as TranslateDTO

  return (
    <section className='space-y-2'>
      <h2 className='text-lg font-semibold text-zinc-900 dark:text-zinc-200'>
        {headings[0]}
      </h2>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-4'>
        {Constants.skills.map((category) => (
          <Card key={category.name}>
            <Tag icon={category.icon}>{category.name}</Tag>
            <CardContent className='grid grid-cols-2 gap-1 px-0 pt-2 sm:grid-cols-3 md:grid-cols-4'>
              {category.list.map(({ name, icon }) => (
                <Button
                  variant='ghost'
                  title={name}
                  key={name}
                  className='text-lg'
                >
                  <Icon icon={icon} className='size-6' />
                  <span className='sr-only'>{name}</span>
                </Button>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
