import { Metadata } from 'next'
import ProjectList from './_partials/list'

export const metadata: Metadata = {
  title: 'Projects'
}

export default function Projects() {
  return (
    <div className='flex w-full px-4 pb-4'>
      <div className='container flex flex-col space-y-10 pt-32'>
        <div className=''>
          <h2 className='text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200 md:text-5xl'>
            Projetos que definem minha trajetória profissional
          </h2>
          <p className='mt-6 text-sm text-zinc-600 dark:text-zinc-400 md:text-base md:leading-relaxed'>
            Ao longo da minha carreira como desenvolvedor, tenho desenvolvido
            muitos projetos. Muitos são de código aberto, então sinta-se à
            vontade para explorar o código e contribuir com suas próprias
            melhorias.
          </p>
        </div>
        <ProjectList />
      </div>
    </div>
  )
}
