import React from 'react'

export default function ArticleLayout({ children }: React.PropsWithChildren) {
  return (
    <div className='flex w-full px-4 pb-4 text-zinc-900 dark:text-zinc-200'>
      <div className='container pt-32'>{children}</div>
    </div>
  )
}
