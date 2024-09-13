"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Project } from '@/types'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {motion as framer} from 'framer-motion';

type Props = {
    project: Project;
}

const MotionCard = framer.create(Card)

export default function ProjectCard({project}:Props) {
  return (
    <MotionCard
        className='flex flex-col'
        initial={{ opacity: 0, scale: 0, translateY: 20 }}
        whileInView={{ opacity: 1,scale: 1,translateY: 0}}
        viewport={{ once: true }}
    >
        <CardHeader className="border rounded-md p-1 overflow-hidden max-h-40">
            <Image src={project.wallpalper} alt={project.title} width={500} height={500} loading='lazy' className="rounded object-cover size-full"/>
        </CardHeader>
        <CardContent className="flex-1 space-y-3 py-4 px-0">
            <CardTitle className="font-medium">{project.title}</CardTitle>
            <CardDescription className="text-pretty text-xs md:text-sm">{project.description}</CardDescription>
        </CardContent>
        <CardFooter className="mt-auto p-0 flex items-center justify-between">
            <div className="flex gap-1 items-center divide-x-2">
                <Button size="sm" variant="link">
                    <Link href={project.link.repo} target="_blank">
                        <Icon icon="mdi:github" className="size-5"/>
                    </Link>
                </Button>
                <ul className="pl-2 flex items-center gap-1">
                {project.techs.map((item)=>(
                    <li key={item} className="p-0 hover:text-blue-500 transition duration-500"><Icon icon={item} className="size-5"/></li>
                ))}
                </ul>
            </div>
            {project.link.host && (
                <Button size="sm" variant="ghost">
                    <Link href={project.link.host} target="_blank">
                        <Icon icon="ion:navigate-outline" className="size-5"/>
                    </Link>
                </Button>
            )}
        </CardFooter>
    </MotionCard>
  )
}
