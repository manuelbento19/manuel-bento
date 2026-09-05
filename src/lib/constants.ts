import { Project } from '@/types'

export const skills = [
  {
    name: 'Frontend',
    icon: 'fluent:phone-desktop-24-regular',
    list: [
      { name: 'JavaScript', icon: 'skill-icons:javascript' },
      { name: 'TypeScript', icon: 'skill-icons:typescript' },
      { name: 'CSS', icon: 'skill-icons:css' },
      { name: 'React', icon: 'skill-icons:react-dark' },
      { name: 'Next.js', icon: 'skill-icons:nextjs-light' },
      { name: 'Tailwind CSS', icon: 'skill-icons:tailwindcss-light' },
      { name: 'React Native', icon: 'vscode-icons:file-type-reactts' },
      { name: 'Expo', icon: 'file-icons:expo' },
      { name: 'Vue', icon: 'logos:vue' },
      { name: 'Astro', icon: 'simple-icons:astro' },
      { name: 'Sass', icon: 'skill-icons:sass' },
      { name: 'Styled Components', icon: 'skill-icons:styledcomponents' },
      { name: 'Storybook', icon: 'logos:storybook-icon' }
    ]
  },
  {
    name: 'Backend',
    icon: 'fluent-mdl2:server-enviroment',
    list: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Express.js', icon: 'skill-icons:expressjs-light' },
      { name: 'Nest.js', icon: 'logos:nestjs' },
      { name: 'Fastify', icon: 'simple-icons:fastify' },
      { name: 'Prisma', icon: 'skill-icons:prisma' },
      { name: 'Jest', icon: 'skill-icons:jest' },
      { name: 'Vitest', icon: 'skill-icons:vitest-light' },
      { name: '.Net', icon: 'skill-icons:dotnet' },
      { name: 'Rust', icon: 'skill-icons:rust' },
      { name: 'MySQL', icon: 'skill-icons:mysql-light' },
      { name: 'PostgreSQL', icon: 'skill-icons:postgresql-light' },
      { name: 'Firebase', icon: 'devicon:firebase' },
      { name: 'Redis', icon: 'devicon:redis' }
    ]
  },
  {
    name: 'Tools',
    icon: 'fluent:window-dev-tools-24-regular',
    list: [
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'Linux', icon: 'logos:linux-tux' },
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'Github', icon: 'skill-icons:github-light' },
      { name: 'Bitbucket', icon: 'devicon:bitbucket' },
      { name: 'Azure', icon: 'vscode-icons:file-type-azure' },
      { name: 'Gitlab', icon: 'devicon:gitlab' },
      { name: 'Bash', icon: 'devicon-plain:bash' },
      { name: 'Powershell', icon: 'vscode-icons:file-type-powershell' },
      { name: 'Jira', icon: 'devicon:jira' },
      { name: 'Notion', icon: 'devicon:notion' },
      { name: 'OpenAI', icon: 'simple-icons:openai' },
      { name: 'Trello', icon: 'devicon:trello' },
      { name: 'VSCode', icon: 'vscode-icons:file-type-vscode' },
      { name: 'Visual Studio', icon: 'devicon:visualstudio' },
      { name: 'Intellij', icon: 'devicon:intellij' }
    ]
  }
]

export const projects: Project[] = [
  {
    title: 'RODIVA',
    wallpaper: '/projects/rodiva.png',
    description:
      'O teu mecânico de bolso. Gestor pessoal de manutenção de veículos que permite registar serviços, combustível e documentos — tudo offline, sem contas e 100% no teu dispositivo. PWA instalável com assistente IA, alertas inteligentes e estatísticas de custos.',
    longDescription:
      'O RODIVA nasceu da necessidade de acompanhar a manutenção do próprio veículo sem depender de serviços na nuvem. Todo o histórico fica no dispositivo: intervenções, combustível, despesas e documentos, com privacidade total e utilização offline. Combina uma experiência PWA instalável com um assistente de IA que ajuda a perceber custos e a prever manutenções.',
    features: [
      'Registo de serviços e manutenções por veículo',
      'Controlo de combustível e despesas com estatísticas de custos',
      'Gestão de documentos associados ao veículo',
      'Assistente com IA para recomendações e análise de custos',
      'Alertas inteligentes de prazos e revisões',
      'PWA instalável, 100% offline e sem contas'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/rodiva',
      host: 'https://rodiva.cc'
    },
    techs: ['mdi:react', 'bxl:typescript', 'simple-icons:vite', 'mdi:tailwind', 'simple-icons:zod']
  },
  {
    title: '@bentoo/state-man',
    wallpaper: '/projects/state-man.png',
    description: 'Um pacote leve para gerenciamento de estado em aplicativos React, projetado como uma alternativa simplificada ao Zustand e a Context API',
    longDescription:
      'O @bentoo/state-man foi desenhado para quem quer gestão de estado sem o boilerplate da Context API e sem o peso de bibliotecas maiores. A API é pequena, previsível e totalmente tipada, ideal para aplicações que precisam de um store simples e direto.',
    features: [
      'API mínima e previsível, inspirada em soluções leves do ecossistema React',
      'Substitui a Context API sem boilerplate',
      'Fully typed em TypeScript',
      'Fácil de integrar em projetos React existentes'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/state-man',
      host: 'https://www.npmjs.com/package/@bentoo/state-man'
    },
    techs: ['mdi:react','bxl:typescript',"mdi:npm"]
  },
  {
    title: '@bentoo/react-lazy',
    wallpaper: '/projects/react-lazy.png',
    description: 'Uma biblioteca criada para facilitar a implementação de Lazy Loading em aplicações React. Ela permite que os componentes sejam carregados apenas quando se tornam visíveis na tela, oferecendo uma maneira para monitorar a entrada dos elementos na viewport.',
    longDescription:
      'O @bentoo/react-lazy resolve o lazy loading com base na visibilidade real na viewport, em vez de depender apenas de scroll. Os componentes são carregados de forma assíncrona quando entram no ecrã, mantendo o bundle inicial mais leve e a experiência mais fluida.',
    features: [
      'Componentes carregados apenas quando visíveis na viewport',
      'Monitorização da entrada dos elementos no ecrã',
      'Integração com fallbacks e Suspense',
      'Biblioteca tipada em TypeScript, publicada no npm'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/react-lazy',
      host: 'https://www.npmjs.com/package/@bentoo/react-lazy'
    },
    techs: ['mdi:react','bxl:typescript',"mdi:npm"]
  },
  {
    title: 'LinkLook',
    wallpaper: '/projects/linklook.png',
    description:
      'Uma pequena app que permite capturar e mostrar uma pré-visualização de links fornecidos. Capaz de gerar uma visualização rápida e intuitiva do conteúdo da página, sem que seja necessário abrir o link diretamente.',
    longDescription:
      'O LinkLook é uma ferramenta prática para obter uma pré-visualização de qualquer link sem ter de o abrir. Colas o URL, a app extrai o conteúdo e devolve uma visualização clara com título, imagem e descrição do destino, facilitando a decisão antes de entrar na página.',
    features: [
      'Pré-visualização rápida de links sem abrir o destino',
      'Extração de título, imagem e descrição do conteúdo',
      'Interface simples e intuitiva em React + Next.js'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/link-look',
      host: 'https://link-look.vercel.app'
    },
    techs: ['mdi:react', 'ri:nextjs-fill', 'mdi:tailwind', 'bxl:typescript']
  },
  {
    title: 'MyFolio',
    wallpaper: '/projects/myfolio.png',
    description:
      'MyFolio é uma plataforma que permite criar portfólios personalizados sem precisar de habilidades de codificação. Com uma interface intuitiva, Shadcn UI e integração com Supabase, você pode facilmente montar um site profissional e destacar suas habilidades de forma rápida e simples.',
    longDescription:
      'O MyFolio democratiza a criação de portfólios: em vez de escrever código, o utilizador monta o seu site através de uma interface intuitiva com componentes Shadcn UI prontos a usar. O Supabase trata da autenticação e dos dados, permitindo publicar um portfólio profissional em minutos.',
    features: [
      'Criação de portfólios personalizados sem código',
      'Interface baseada em Shadcn UI',
      'Autenticação e armazenamento com Supabase',
      'Publicação rápida e simples do site final'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/myfolio',
      host: 'https://useportfolio.vercel.app/'
    },
    techs: ['mdi:react', 'ri:nextjs-fill', 'mdi:tailwind', 'simple-icons:zod', 'simple-icons:supabase']
  },
  {
    title: 'Image4Text',
    wallpaper: '/projects/image4text.png',
    description:
      'Uma app para conversão de imagem em texto. A app pemite extrair textos de imagens para automatizar o processamento de textos.',
    longDescription:
      'O Image4Text converte imagens em texto, permitindo extrair conteúdo de capturas, documentos e fotografias para agilizar processos que dependem de digitação manual. Uma ferramenta simples com um objetivo claro: automatizar a extração de texto.',
    features: [
      'Conversão de imagens em texto',
      'Extração de conteúdo de capturas e fotografias',
      'Interface direta em React + TypeScript'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/image4text',
      host: 'https://image4text.vercel.app/'
    },
    techs: [
      'mdi:react',
      'bxl:typescript',
      'devicon-plain:css3',
      'file-icons:styledcomponents'
    ]
  },
  {
    title: 'Micro-frontend',
    wallpaper: '/projects/microfrontend.png',
    description:
      'Este projeto demonstra uma aplicação de micro frontends onde temos três aplicativos independentes: react-components,vue-components e app. Dando a possibilidade de trabalhar com React e Vue.',
    longDescription:
      'Este projeto é uma prova de conceito de arquitetura de micro frontends: três aplicações independentes (duas com React e uma com Vue) que vivem no mesmo produto e se comunicam entre si. Uma demonstração prática de equipas independentes a partilhar um shell comum.',
    features: [
      'Arquitetura de micro frontends com três aplicações independentes',
      'React e Vue a coabitarem no mesmo produto',
      'Comunicação entre aplicações independentes',
      'Build e deploy por aplicação com Vite'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/micro-frontend',
    },
    techs: [
      'mdi:react',
      'uim:vuejs',
      'bxl:typescript',
      'mdi:sass',
      'simple-icons:vite'
    ]
  },
  {
    title: 'Port Scanner',
    wallpaper: '/projects/portscanner.png',
    description:
      'É um scanner de rede gratuito e de código aberto. É usado para descobrir hosts e serviços em uma rede de computadores, enviando pacotes e analisando as respostas.',
    longDescription:
      'Um scanner de rede clássico e open source, escrito em Node.js e TypeScript: envia pacotes para a rede e analisa as respostas para descobrir hosts e serviços ativos. Uma ferramenta útil para diagnóstico e segurança em ambientes locais.',
    features: [
      'Descoberta de hosts e serviços numa rede',
      'Envio e análise de pacotes',
      'CLI em Node.js + TypeScript',
      'Código aberto'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/port-scanner'
    },
    techs: ['mdi:nodejs', 'bxl:typescript', 'carbon:tcp-ip-service']
  },
  {
    title: 'OllamaBot',
    wallpaper: '/projects/ollama.png',
    description:
      'É uma aplicação inovadora que utiliza a imagem de contêiner Llama para implementar um assistente de conversação inteligente, semelhante ao GPT, capaz de compreender e gerar respostas coerentes em uma variedade de contextos, proporcionando uma experiência de interação natural e eficaz.',
    longDescription:
      'O OllamaBot traz um assistente de conversação estilo ChatGPT para o próprio ambiente: via container Llama/Ollama, responde de forma coerente a uma variedade de contextos com os modelos corridos localmente. O backend Node.js + Docker expõe o modelo e a interface React consome a API.',
    features: [
      'Assistente de conversação inteligente estilo ChatGPT',
      'Modelos Llama via container Docker/Ollama',
      'Backend em Node.js + TypeScript',
      'Interface React fluida para a conversa'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/ollama-bot'
    },
    techs: [
      'mdi:react',
      'bxl:typescript',
      'mdi:docker',
      'simple-icons:ollama',
      'mdi:sass'
    ]
  },
  {
    title: 'DaBanda OSS',
    wallpaper: '/projects/dabanda.png',
    description:
      'É uma plataforma dedicada a promover e destacar projetos de código aberto de diversas áreas e temáticas. Oferece uma maneira fácil e acessível de descobrir e contribuir para projetos de código aberto, impulsionando a inovação e o compartilhamento de conhecimento.',
    longDescription:
      'O DaBanda OSS é um agregador de projetos open source organizado por áreas e temáticas. O objetivo é dar visibilidade a projetos que merecem atenção, facilitando a descoberta e a contribuição da comunidade, em vez de depender apenas de redes sociais.',
    features: [
      'Catálogo de projetos open source por área e temática',
      'Descoberta fácil de projetos para contribuir',
      'Plataforma web em Next.js + Tailwind'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/dabanda-oss',
      host: 'https://dabanda-oss.vercel.app/'
    },
    techs: ['mdi:react', 'ri:nextjs-fill', 'mdi:tailwind']
  },
  {
    title: 'Unsplash Angular',
    wallpaper: '/projects/unangular.png',
    description:
      'Um aplicativo desenvolvido em angular para buscar imagens do unsplash.',
    longDescription:
      'Uma aplicação Angular que consome a API do Unsplash para pesquisar imagens. Um exemplo limpo de integração com API externa, gestão de estado de pesquisa e renderização de galerias, tudo escrito em Angular + TypeScript.',
    features: [
      'Integração com a API do Unsplash',
      'Pesquisa de imagens em tempo real',
      'App 100% Angular + TypeScript'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/unsplash-angular'
    },
    techs: ['mdi:angular', 'bxl:typescript', 'mdi:sass']
  },
  {
    title: 'URL Shortener',
    wallpaper: '/projects/url-shortner.png',
    description:
      'Um encurtador de URL é um site que reduz o comprimento do seu URL (Uniform Resource Locator). A ideia é minimizar o endereço da página da web em algo que seja mais fácil de lembrar e rastrear.',
    longDescription:
      'Um encurtador de URLs completo, do frontend ao backend: a API em Node.js/Express com Prisma e PostgreSQL trata da criação e reencaminhamento dos links, enquanto o Docker simplifica a execução. Links longos viram aliases curtos e fáceis de partilhar.',
    features: [
      'Encurtamento de URLs longas em aliases curtos',
      'API backend em Node.js + Express + Prisma',
      'Persistência com PostgreSQL',
      'Containerizado com Docker'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/url-shortener'
    },
    techs: [
      'mdi:nodejs',
      'bxl:typescript',
      'simple-icons:express',
      'simple-icons:prisma',
      'akar-icons:postgresql-fill',
      'mdi:docker'
    ]
  },
  {
    title: 'Nano Router',
    wallpaper: '/projects/nanorouter.png',
    description:
      'Uma pequena app em react para demonstrar como fazer roteamento sem a necessidade do react-router-dom, usando apenas conceitos básicos do react.js. Serviu como prova de conceito de que com base de react podes fazer um monte de coisas, incluíndo roteamento.',
    longDescription:
      'O Nano Router é uma prova de conceito: um router funcional construído apenas com conceitos base do React, sem react-router-dom. Demonstra que com o essencial do React dá para implementar navegação, servindo como estudo de como os routers funcionam internamente.',
    features: [
      'Roteamento sem react-router-dom',
      'Implementado com conceitos base do React',
      'Projeto educativo sobre o funcionamento de routers'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/nano-router'
    },
    techs: ['mdi:react', 'bxl:typescript', 'devicon-plain:css3']
  },
  {
    title: 'Image Generator',
    wallpaper: '/projects/image-generator.png',
    description:
      'Aplicativo que se integra perfeitamente a API OpenAI DALL-E e gera imagens cativantes com base em solicitações textuais.',
    longDescription:
      'O Image Generator liga-se à API OpenAI DALL-E para transformar texto em imagens. Basta descrever o que queres e a app devolve a imagem gerada, numa experiência simples construída com Next.js, Tailwind e a API oficial da OpenAI.',
    features: [
      'Geração de imagens com OpenAI DALL-E a partir de texto',
      'Fonte de dados real via API oficial da OpenAI',
      'Interface Next.js + Tailwind'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/image-generator'
    },
    techs: [
      'mdi:react',
      'ri:nextjs-fill',
      'mdi:tailwind',
      'simple-icons:openai'
    ]
  },
  {
    title: 'Studio SPA',
    wallpaper: '/projects/studio-spa.png',
    description:
      'Um aplicativo React para mostrar como otimizar o desempenho usando carregamento lento (lazy loading)',
    longDescription:
      'O Studio SPA é um exemplo prático de otimização de desempenho: uma SPA React que demonstra lazy loading na real — componentes e rotas carregados só quando necessários, reduzindo o bundle inicial e melhorando o tempo de interação.',
    features: [
      'Demonstração prática de lazy loading',
      'Redução do bundle inicial com carregamento sob demanda',
      'SPA em React + Tailwind'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/studio-spa-portfolio',
      host: 'https://studio-spa-portfolio.vercel.app/'
    },
    techs: ['mdi:react', 'mdi:tailwind', 'ph:phosphor-logo']
  },
  {
    title: 'Poupança',
    wallpaper: '/projects/poupanca.png',
    description:
      'Uma aplicação desenvolvida com o Reactjs com o objetivo de gerir as tuas contas/poupanças.',
    longDescription:
      'O Poupança é um gestor simples e direto para as tuas contas e poupanças: registar movimentos, acompanhar o saldo e manter o controlo financeiro pessoal num só lugar. Desenvolvido com React e styled-components.',
    features: [
      'Gestão de contas e poupanças',
      'Registo de movimentos e acompanhamento de saldo',
      'Interface em React + styled-components'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/poupanca',
      host: 'https://poupanca.vercel.app/'
    },
    techs: ['mdi:react', 'devicon-plain:css3', 'file-icons:styledcomponents']
  }
]
