import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Project } from '@/types'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    project: Project;
}

export default function ProjectCard({project}:Props) {
  return (
    <Card>
        <CardHeader className="border rounded p-0 overflow-hidden">
            <Image src={project.wallpalper} alt={project.title} width={200} height={200} className="rounded object-cover size-full"/>
        </CardHeader>
        <CardContent className="space-y-3 py-4 px-0">
            <CardTitle className="font-medium">{project.title}</CardTitle>
            <CardDescription className="text-pretty text-xs md:text-sm">{project.description}</CardDescription>
        </CardContent>
        <CardFooter className="p-0 flex items-center justify-between">
        <div className="flex gap-1 items-center divide-x-2 ">
            <Button size="sm" variant="link">
            <Link href={project.url} target="_blank">
                <Icon icon="mdi:github" className="size-5"/>
            </Link>
            </Button>
            <ul className="pl-1 flex items-center gap-2">
            {project.techs.map((item)=>(
                <li key={item} className="p-1"><Icon icon={item} className="size-4"/></li>
            ))}
            </ul>
        </div>
        </CardFooter>
    </Card>
  )
}
