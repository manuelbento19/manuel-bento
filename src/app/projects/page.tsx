import { Metadata } from "next";
import ProjectList from "./_partials/list";

export const metadata:Metadata = {
  title: "Projects"
}

export default function Projects() {
  return (
    <div className='flex w-full px-4 pb-4'>
      <div className='container flex flex-col pt-32 space-y-10'>
        <div className="">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-200">Projetos que definem minha trajetória profissional</h2>
          <p className="mt-6 text-sm md:text-base text-zinc-600 dark:text-zinc-400 md:leading-relaxed">
            Ao longo da minha carreira como desenvolvedor, tenho desenvolvido muitos projetos. Muitos são de código aberto, então sinta-se à vontade para explorar o código e contribuir com suas próprias melhorias.
          </p>
        </div>
        <ProjectList/>
      </div>
    </div>
  )
}
