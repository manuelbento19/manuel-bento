import { Metadata } from "next";
import Hero from "../_partials/hero";
import Skills from "../_partials/skills";

export const metadata:Metadata = {
  title: "About",
  description: "Software Developer apaixonado por tecnologia, especializado em Desenvolvimento Frontend."
}

export default function About() {
  return (
    <div className='flex w-full px-4'>
      <div className='container flex flex-col pt-32 space-y-10'>
        <Hero />
        <section className="space-y-4">
          <p className="text-xs md:block md:text-sm md:leading-relaxed">Minhas atividades são bastante diversificadas. Trabalho na criação de aplicativos, tanto para web quanto para mobile.</p>
          <p className="text-xs md:block md:text-sm md:leading-relaxed">A cada projeto, procuro usar as melhores práticas e obter um novo aprendizado. Além de escrever código, também participo na análise de requisitos, implementação e manutenção das aplicações (bom, não trato apenas do Frontend kkkk).</p>
          <p className="text-xs md:block md:text-sm md:leading-relaxed">Atualmente, estou focado no meu desenvolvimento pessoal e profissional, sempre buscando aprender novas tecnologias e aprimorar minhas habilidades. Além disso, tenho um grande interesse em ajudar outras pessoas a entrarem no mundo do desenvolvimento de software. Para isso, escrevo artigos compartilhando meu conhecimento, experiências e dicas práticas para quem está começando ou já possui alguma experiência na área.</p>
        </section>
        <Skills/>
        <section className="space-y-2">
          <h2 className="text-lg font-semibold my-1.5 pb-2 border-0 border-b">Education</h2>
          <div className="space-y-2 divide-y">
            <div>
              <h3 className="font-semibold">Instituto Politécnico Industrial de Luanda</h3>
              <h2 className="text-gray-600 dark:text-gray-300">Técnico de Sistemas Informático</h2>
              <span className="text-gray-500 dark:text-gray-200">2017 - 2021</span>
            </div>
          </div>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-semibold my-1.5 pb-2 border-0 border-b">Work</h2>
          <div className="space-y-2 divide-y">
            <div>
              <header className="flex items-center justify-between gap-2 pt-2">
                <h3 className="font-semibold">Fronted Developer</h3>
                <span>2023 - Presente</span>
              </header>
              <h2 className="text-gray-600 dark:text-gray-300">ETIC - Soluções & Tecnologia</h2>
              <p className="mt-2 text-xs md:block md:text-sm md:leading-relaxed">Como Frontend Developer na ETIC, crio experiências digitais intuitivas e envolventes usando tecnologias modernas. Minha expertise inclui:</p>
              <ul className="mt-2 space-y-2 text-xs md:block md:text-sm md:leading-relaxed list-disc pl-10">
                <li>Tecnologias atualizadas e frameworks de frontend, como React.js e Next.js</li>
                <li>Design de UI/UX elegante e intuitivo.</li>
                <li>Otimização de desempenho para carregamento rápido.</li>
                <li>Colaboração inovadora e comunicação eficaz.</li>
                <li>Adaptação e aprendizado contínuos.</li>
              </ul>
            </div>
            <div>
              <header className="flex items-center justify-between gap-2 pt-2">
                <h3 className="font-semibold">Fullstack Developer</h3>
                <span>2021 - 2023</span>
              </header>
              <h2 className="text-gray-600 dark:text-gray-300">Novagrolider</h2>
              <ul className="mt-2 space-y-2 text-xs md:block md:text-sm md:leading-relaxed list-disc pl-10">
                <li><strong>Frontend:</strong> desenvolvi interfaces dinâmicas com React.js, criei aplicativos móveis com React Native, e apliquei Tailwind CSS, Bootstrap, e CSS para estilização responsiva e avançada, construi aplicativos desktop utilizando C# WinForm.</li>
                <li><strong>Backend:</strong> desenvolvi APIs rápidas e eficientes com Node.js (Express e Fastfy), construi serviços web escaláveis com C# e .NET Core e implementei comunicação entre serviços utilizando WCF.</li>
                <li><strong>Versionamento e Colaboração:</strong> utilizei Git para controle de versão e colaboração.</li>
                <li><strong>Empacotamento e Distribuição:</strong> facilitei a distribuição de aplicativos com Docker.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
