import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Articles"
}

export default function Articles() {
  return (
    <div className='flex w-full px-4'>
      <div className='container flex flex-col pt-32'>
        <div className="">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Artigos que fornecem dicas e conhecimentos</h2>
          <p className="mt-6 text-sm md:text-base text-zinc-600 dark:text-zinc-400 md:leading-relaxed">
            Ao longo da minha carreira como desenvolvedor, tenho escrito alguns artigos  para ajudar novos desenvolvedores a se destacarem no setor de software.
          </p>
        </div>
      </div>
    </div>
  )
}
