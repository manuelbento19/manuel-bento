"use client"
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image';
import Link from 'next/link';

const components = {
  Image,
  a: ({ href, children }:React.ComponentProps<"a">) => <Link href={href!}>{children}</Link>,
}

type Props = {
  content: string;
}

export function MdxProvider({ content }: Props) {
  const Component = useMDXComponent(content)

  return <Component components={components} />
}