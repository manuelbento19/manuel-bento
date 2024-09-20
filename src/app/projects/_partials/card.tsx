'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Project } from '@/types'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'
import { motion as framer } from 'framer-motion'
import {LazyComponent} from '@bentoo/react-lazy';
import Image from 'next/image'

type Props = {
  project: Project
}

const MotionCard = framer.create(Card)

export default function ProjectCard({ project }: Props) {
  return (
    <MotionCard
      className='flex flex-col'
      initial={{ opacity: 0, scale: 0, translateY: 20 }}
      whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
      viewport={{ once: true }}
    >
      <CardHeader className='max-h-40 h-40 overflow-hidden rounded-md border p-1 relative'>
        <LazyComponent fallback={<div className='figure absolute inset-0' />}>
          <Image src={project.wallpalper} alt={project.title} width={500} height={500} loading='lazy' className='size-full rounded object-cover'/>
        </LazyComponent>
      </CardHeader>
      <CardContent className='flex-1 space-y-3 px-0 py-4'>
        <CardTitle className='font-medium'>{project.title}</CardTitle>
        <CardDescription className='text-pretty text-xs md:text-sm'>
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className='mt-auto flex items-center justify-between p-0'>
        <div className='flex items-center gap-1 divide-x-2'>
          <Button size='sm' variant='link'>
            <Link href={project.link.repo} target='_blank'>
              <Icon icon='mdi:github' className='size-5' />
            </Link>
          </Button>
          <ul className='flex items-center gap-1 pl-2'>
            {project.techs.map((item) => (
              <li
                key={item}
                className='p-0 transition duration-500 hover:text-blue-500'
              >
                <Icon icon={item} className='size-5' />
              </li>
            ))}
          </ul>
        </div>
        {project.link.host && (
          <Button size='sm' variant='ghost'>
            <Link href={project.link.host} target='_blank'>
              <Icon icon='ion:navigate-outline' className='size-5' />
            </Link>
          </Button>
        )}
      </CardFooter>
    </MotionCard>
  )
}
