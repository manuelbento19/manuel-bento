import { Metadata } from "next";
import Hero from "../_partials/hero";
import Skills from "../_partials/skills";
import { useMessages } from "next-intl";
import { TranslateDTO } from "@/types";

export const metadata:Metadata = {
  title: "About",
  description: "Software Developer apaixonado por tecnologia, especializado em Desenvolvimento Frontend."
}

export default function About() {
  const {about} = useMessages() as TranslateDTO;
  
  return (
    <div className='flex w-full px-4 pb-4 text-zinc-900 dark:text-zinc-200'>
      <div className='container flex flex-col pt-32 space-y-10'>
        <Hero />
        <section className="space-y-2">
          {about.hero.data.slice(0,about.hero.data.length-1).map((item,index)=>(
            <p key={index} className="text-xs md:block md:text-sm md:leading-relaxed">{item}</p>
          ))}
        </section>
        <Skills/>
        <p className="text-xs md:block md:text-sm md:leading-relaxed">{about.hero.data[3]}</p>
        <section className="space-y-2">
          <h2 className="text-lg font-semibold my-1.5 pb-2 border-0 border-b">{about.headings[1]}</h2>
          <div className="space-y-2 divide-y">
            <div>
              <h3 className="font-semibold">Instituto Politécnico Industrial de Luanda</h3>
              <h2 className="text-gray-600 dark:text-gray-300">Técnico de Sistemas Informático</h2>
              <span className="text-gray-500 dark:text-gray-200">2017 - 2021</span>
            </div>
          </div>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-semibold my-1.5 pb-2 border-0 border-b">{about.headings[2]}</h2>
          <div className="space-y-2 divide-y">
            {about.work.map(item=>(
              <div key={item.company}>
                <header className="flex items-center justify-between gap-2 pt-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  <span>{item.started_date} - {item.due_date}</span>
                </header>
                <h2 className="text-gray-600 dark:text-gray-300">{item.company}</h2>
                <p className="mt-2 text-xs md:block md:text-sm md:leading-relaxed">{item.description}</p>
                <ul className="mt-2 space-y-2 text-xs md:block md:text-sm md:leading-relaxed list-disc pl-10">
                  {item.list.map((jobKey)=>(
                    <li key={jobKey} dangerouslySetInnerHTML={{__html: jobKey}}/>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
