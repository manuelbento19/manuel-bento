'use client'
import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from 'next/image'
import Link from 'next/link'

const components = {
  Image,
  a: ({ href, children }: React.ComponentProps<'a'>) => (
    <Link href={href!}>{children}</Link>
  )
}

type Props = {
  content: string
}

export function MdxProvider({ content }: Props) {
  const Component = useMemo(() => getMDXComponent(content), [content])

  return <Component components={components} />
}