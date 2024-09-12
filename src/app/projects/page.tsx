import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import image from '@/assets/myfolio.png';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const metadata:Metadata = {
  title: "Projects"
}

export default function Projects() {
  return (
    <div className='flex w-full px-4'>
      <div className='container flex flex-col pt-32 space-y-10'>
        <div className="">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">Projetos que definem minha trajetória profissional</h2>
          <p className="mt-6 text-sm md:text-base text-zinc-600 dark:text-zinc-400 md:leading-relaxed">
            Ao longo da minha carreira como desenvolvedor, tenho desenvolvido muitos projetos. Muitos são de código aberto, então sinta-se à vontade para explorar o código e contribuir com suas próprias melhorias.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Card>
            <CardHeader className="border rounded p-0 overflow-hidden">
              <Image src={image} alt="myfolio" width={200} height={200} className="rounded object-cover size-full"/>
            </CardHeader>
            <CardContent className="space-y-3 py-4 px-0">
              <CardTitle className="font-medium">MyFolio</CardTitle>
              <CardDescription className="text-pretty text-xs md:text-sm">
                MyFolio é um projeto que permite criar portfólios personalizados sem precisar de habilidades de codificação. Com uma interface intuitiva, você pode facilmente montar um site profissional, adicionar seu trabalho e destacar suas habilidades de forma rápida e simples.
              </CardDescription>
            </CardContent>
            <CardFooter className="p-0 flex items-center justify-between">
              <div className="flex gap-1 items-center divide-x-2 ">
                <Button size="sm" variant="link">
                  <Link href="https://github.com/manuelbento19/my-folio" target="_blank">
                    <Icon icon="mdi:github" className="size-5"/>
                  </Link>
                </Button>
                <ul className="pl-1 flex items-center gap-2">
                  <li className="p-1"><Icon icon="mdi:react" className="size-4"/></li>
                  <li className="p-1"><Icon icon="ri:nextjs-fill" className="size-4"/></li>
                </ul>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
