import { useMDXComponent } from 'next-contentlayer/hooks'

const components = { }

type Props = {
    content: string;
}

export function MdxProvider({ content }: Props) {
  const Component = useMDXComponent(content)

  return <Component components={components} />
}