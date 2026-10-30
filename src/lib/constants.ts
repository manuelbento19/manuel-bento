import { Project } from '@/types'

export const skills = [
  {
    name: 'Frontend',
    icon: 'fluent:phone-desktop-24-regular',
    list: [
      { name: 'JavaScript', icon: 'skill-icons:javascript' },
      { name: 'TypeScript', icon: 'skill-icons:typescript' },
      { name: 'HTML', icon: 'skill-icons:html' },
      { name: 'CSS', icon: 'skill-icons:css' },
      { name: 'React', icon: 'skill-icons:react-dark' },
      { name: 'Next.js', icon: 'skill-icons:nextjs-light' },
      { name: 'React Native', icon: 'vscode-icons:file-type-reactts' },
      { name: 'Expo', icon: 'file-icons:expo' },
      { name: 'Vue', icon: 'logos:vue' },
      { name: 'Angular', icon: 'mdi:angular' },
      { name: 'Astro', icon: 'simple-icons:astro' },
      { name: 'Tailwind CSS', icon: 'skill-icons:tailwindcss-light' }
    ]
  },
  {
    name: 'Backend',
    icon: 'fluent-mdl2:server-enviroment',
    list: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Express.js', icon: 'skill-icons:expressjs-light' },
      { name: 'NestJS', icon: 'logos:nestjs' },
      { name: 'Fastify', icon: 'simple-icons:fastify' },
      { name: '.NET', icon: 'skill-icons:dotnet' },
      { name: 'Rust', icon: 'skill-icons:rust' },
      { name: 'Zod', icon: 'simple-icons:zod' }
    ]
  },
  {
    name: 'Databases & Data',
    icon: 'mdi:database',
    list: [
      { name: 'PostgreSQL', icon: 'skill-icons:postgresql-light' },
      { name: 'MySQL', icon: 'skill-icons:mysql-light' },
      { name: 'Redis', icon: 'devicon:redis' },
      { name: 'Firebase', icon: 'devicon:firebase' },
      { name: 'Supabase', icon: 'simple-icons:supabase' },
      { name: 'Prisma', icon: 'skill-icons:prisma' }
    ]
  },
  {
    name: 'Architecture & Engineering',
    icon: 'mdi:sitemap',
    list: [
      { name: 'Software Architecture', icon: 'mdi:vector-polyline' },
      { name: 'Micro Frontends', icon: 'mdi:view-dashboard' },
      { name: 'REST APIs', icon: 'mdi:api' },
      { name: 'CI/CD', icon: 'mdi:source-branch-sync' },
      { name: 'Code Review', icon: 'mdi:code-tags-check' },
      { name: 'Code Quality', icon: 'mdi:check-decagram' },
      {
        name: 'Performance Optimization',
        icon: 'mdi:speedometer'
      },
      { name: 'Technical Leadership', icon: 'mdi:account-supervisor' },
      { name: 'System Integration', icon: 'mdi:connection' }
    ]
  },
  {
    name: 'Tools & DevOps',
    icon: 'fluent:window-dev-tools-24-regular',
    list: [
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'Linux', icon: 'logos:linux-tux' },
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'GitHub', icon: 'skill-icons:github-light' },
      { name: 'GitLab', icon: 'devicon:gitlab' },
      { name: 'Bitbucket', icon: 'devicon:bitbucket' },
      { name: 'Azure', icon: 'vscode-icons:file-type-azure' },
      { name: 'Vercel', icon: 'simple-icons:vercel' },
      { name: 'Cloudflare', icon: 'simple-icons:cloudflare' },
      { name: 'Bash', icon: 'devicon-plain:bash' },
      { name: 'PowerShell', icon: 'vscode-icons:file-type-powershell' },
      { name: 'pnpm', icon: 'simple-icons:pnpm' },
      { name: 'npm', icon: 'simple-icons:npm' },
      { name: 'Vite', icon: 'simple-icons:vite' },
      { name: 'Jira', icon: 'devicon:jira' },
      { name: 'Notion', icon: 'devicon:notion' },
      { name: 'Trello', icon: 'devicon:trello' },
      { name: 'VS Code', icon: 'vscode-icons:file-type-vscode' },
      { name: 'Visual Studio', icon: 'devicon:visualstudio' },
      { name: 'IntelliJ', icon: 'devicon:intellij' }
    ]
  },
  {
    name: 'Testing',
    icon: 'mdi:test-tube',
    list: [
      { name: 'Jest', icon: 'skill-icons:jest' },
      { name: 'Vitest', icon: 'skill-icons:vitest-light' },
      { name: 'Playwright', icon: 'simple-icons:playwright' },
      { name: 'Testing Library', icon: 'simple-icons:testinglibrary' }
    ]
  },
  {
    name: 'Design & UI',
    icon: 'mdi:palette',
    list: [
      { name: 'shadcn/ui', icon: 'simple-icons:shadcnui' },
      { name: 'Radix UI', icon: 'simple-icons:radixui' },
      { name: 'Framer Motion', icon: 'simple-icons:framer' },
      { name: 'Storybook', icon: 'logos:storybook-icon' },
      { name: 'Sass', icon: 'skill-icons:sass' },
      { name: 'styled-components', icon: 'skill-icons:styledcomponents' },
      { name: 'UI/UX Design', icon: 'mdi:palette-swatch' }
    ]
  },
  {
    name: 'AI & Developer Tools',
    icon: 'mdi:robot',
    list: [
      { name: 'OpenAI', icon: 'simple-icons:openai' },
      { name: 'Claude', icon: 'simple-icons:claude' },
      { name: 'Gemini', icon: 'simple-icons:googlegemini' },
      { name: 'Cursor', icon: 'simple-icons:cursor' },
      { name: 'GitHub Copilot', icon: 'simple-icons:githubcopilot' },
      { name: 'OpenCode', icon: 'simple-icons:opencode' },
      { name: 'Perplexity', icon: 'simple-icons:perplexity' },
      { name: 'Ollama', icon: 'simple-icons:ollama' },
      { name: 'v0', icon: 'simple-icons:v0' },
      { name: 'DeepSeek', icon: 'simple-icons:deepseek' }
    ]
  }
]

export const projects: Project[] = [
  {
    title: 'Modullum',
    wallpaper: '/projects/modullum.png',
    description:
      'Plataforma no-code para criar, personalizar e publicar portfólios profissionais em minutos, com editor visual drag-and-drop e domínio próprio.',
    longDescription:
      'Como fundador da Modullum, desenvolvi uma plataforma que permite a qualquer pessoa publicar um portfólio profissional sem escrever código. O fluxo combina autenticação com GitHub/Google, um editor visual drag-and-drop e publicação num clique, substituindo a montagem manual de templates, hosting e integrações. A plataforma inclui importação de projetos do GitHub, analytics de visitas, cartão de visita digital com QR code, tema claro/escuro e suporte PT/EN, com planos Free e Pro e billing integrado.',
    features: [
      'Editor visual drag-and-drop para criar portfólios sem código',
      'Publicação num clique com endereço próprio (nome.modullum.com)',
      'Importação de projetos diretamente do GitHub',
      'Analytics de visitas e de interesse por projeto',
      'Cartão de visita digital com QR code',
      'Portfólio responsivo com tema claro/escuro e suporte PT/EN',
      'Planos Free e Pro com billing integrado'
    ],
    link: {
      host: 'https://modullum.com'
    },
    techs: [
      'ri:nextjs-fill',
      'mdi:react',
      'bxl:typescript',
      'mdi:tailwind',
      'simple-icons:zod',
      'simple-icons:reacthookform',
      'akar-icons:postgresql-fill',
      'simple-icons:vercel',
      'simple-icons:pnpm',
      'simple-icons:radixui'
    ]
  },
  {
    title: 'RODIVA',
    wallpaper: '/projects/rodiva.png',
    description:
      'Aplicativo PWA para gerir a manutenção do veículo de forma privada e offline, com registo de serviços, combustível, despesas e documentos, assistente de IA e estatísticas de custos.',
    longDescription:
      'Desenvolvi o RODIVA para acompanhar a manutenção do veículo sem depender de serviços na nuvem. Todo o histórico — intervenções, combustível, despesas e documentos — fica no dispositivo, garantindo privacidade e utilização offline. A experiência inclui instalação como PWA, alertas inteligentes de prazos e revisões e um assistente de IA que ajuda a perceber custos e a prever manutenções.',
    features: [
      'Registo de serviços e manutenções por veículo',
      'Controlo de combustível e despesas com estatísticas de custos',
      'Gestão de documentos associados ao veículo',
      'Assistente de IA para recomendações e análise de custos',
      'Alertas inteligentes de prazos e revisões',
      'PWA instalável, 100% offline e sem necessidade de conta'
    ],
    link: {
      host: 'https://rodiva.cc'
    },
    techs: ['mdi:react', 'bxl:typescript', 'simple-icons:vite', 'mdi:tailwind', 'simple-icons:zod']
  },
  {
    title: '@bentoo/state-man',
    wallpaper: '/projects/state-man.png',
    description:
      'Biblioteca open-source e leve para gestão de estado em React, pensada como uma alternativa simples ao Zustand e à Context API.',
    longDescription:
      'Criei o @bentoo/state-man para simplificar a gestão de estado em aplicações React, sem o boilerplate da Context API e sem o peso de bibliotecas maiores. A API é pequena, previsível e totalmente tipada, tornando o store fácil de integrar em projetos existentes.',
    features: [
      'API mínima e previsível, inspirada em soluções leves do ecossistema React',
      'Alternativa à Context API sem boilerplate',
      'Totalmente tipada em TypeScript',
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
    description:
      'Biblioteca open-source para lazy loading em React, que carrega componentes apenas quando entram na viewport.',
    longDescription:
      'Criei o @bentoo/react-lazy para tornar o lazy loading mais simples em React. Em vez de depender apenas do scroll, a biblioteca carrega componentes de forma assíncrona quando estes ficam visíveis no ecrã, mantendo o bundle inicial mais leve e a experiência mais fluida. Integra-se com fallbacks e Suspense e está publicada no npm.',
    features: [
      'Componentes carregados apenas quando visíveis na viewport',
      'Monitorização da entrada dos elementos no ecrã',
      'Integração com fallbacks e Suspense',
      'Biblioteca tipada em TypeScript e publicada no npm'
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
      'Ferramenta web para pré-visualizar links sem os abrir, mostrando título, imagem e descrição do destino.',
    longDescription:
      'Desenvolvi o LinkLook para simplificar a pré-visualização de links antes de os abrir. Ao colar um URL, a aplicação extrai o conteúdo da página e devolve uma visualização clara com título, imagem e descrição do destino, tornando a decisão mais informada. A interface foi construída em React e Next.js.',
    features: [
      'Pré-visualização de links sem abrir o destino',
      'Extração de título, imagem e descrição da página',
      'Interface simples e intuitiva em React + Next.js'
    ],
    link: {
      repo: 'https://github.com/manuelbento19/link-look',
      host: 'https://link-look.vercel.app'
    },
    techs: ['mdi:react', 'ri:nextjs-fill', 'mdi:tailwind', 'bxl:typescript']
  },
  {
    title: 'Image4Text',
    wallpaper: '/projects/image4text.png',
    description:
      'Aplicação web para extrair texto de imagens, automatizando tarefas que dependem de transcrição manual.',
    longDescription:
      'Desenvolvi o Image4Text para converter imagens em texto e simplificar a extração de conteúdo de capturas, documentos e fotografias. A aplicação reduz a dependência de transcrição manual e oferece uma interface direta para automatizar o processamento de texto, com React, TypeScript e styled-components.',
    features: [
      'Conversão de imagens em texto',
      'Extração de conteúdo de capturas, documentos e fotografias',
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
      'Prova de conceito de arquitetura de micro frontends com três aplicações independentes, combinando React e Vue no mesmo produto.',
    longDescription:
      'Desenvolvi este projeto para explorar, na prática, uma arquitetura de micro frontends. O produto é composto por três aplicações independentes — duas em React e uma em Vue — que coexistem no mesmo shell e comunicam entre si. A build e o deploy são feitos por aplicação com Vite, demonstrando como equipas independentes podem partilhar um produto comum.',
    features: [
      'Arquitetura de micro frontends com três aplicações independentes',
      'React e Vue a coexistir no mesmo produto',
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
      'Scanner de rede open-source para descobrir hosts e serviços ativos através do envio e análise de pacotes.',
    longDescription:
      'Desenvolvi o Port Scanner como uma ferramenta open-source de diagnóstico de rede. Escrito em Node.js e TypeScript, o CLI envia pacotes e analisa as respostas para identificar hosts e serviços ativos, apoiando tarefas de diagnóstico e segurança em ambientes locais.',
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
      'Assistente de conversação local que utiliza modelos Llama via Ollama e Docker para responder de forma coerente em diferentes contextos.',
    longDescription:
      'Desenvolvi o OllamaBot para trazer uma experiência de conversação semelhante à do ChatGPT para o próprio ambiente. Através de um container Llama/Ollama, a aplicação responde a diferentes contextos com modelos executados localmente. O backend em Node.js e Docker expõe o modelo, e a interface React consome a API para uma interação fluida.',
    features: [
      'Assistente de conversação inteligente estilo ChatGPT',
      'Modelos Llama executados localmente via Docker/Ollama',
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
      'Plataforma para descobrir e destacar projetos open-source por área e temática, facilitando a contribuição da comunidade.',
    longDescription:
      'Desenvolvi o DaBanda OSS para dar visibilidade a projetos open-source que merecem atenção. A plataforma organiza projetos por área e temática, tornando mais fácil descobrir iniciativas relevantes e encontrar formas de contribuir, sem depender apenas de redes sociais.',
    features: [
      'Catálogo de projetos open-source por área e temática',
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
      'Aplicação Angular para pesquisar e explorar imagens do Unsplash através da respetiva API.',
    longDescription:
      'Desenvolvi esta aplicação em Angular para explorar a integração com a API do Unsplash. O projeto permite pesquisar imagens e apresentar os resultados numa galeria, com gestão do estado de pesquisa e renderização dinâmica, utilizando Angular e TypeScript.',
    features: [
      'Integração com a API do Unsplash',
      'Pesquisa de imagens em tempo real',
      'Aplicação em Angular + TypeScript'
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
      'Encurtador de URLs com API própria, persistência em PostgreSQL e execução simplificada com Docker.',
    longDescription:
      'Desenvolvi um encurtador de URLs completo, do frontend ao backend. A API em Node.js e Express, com Prisma e PostgreSQL, é responsável pela criação e reencaminhamento dos links, enquanto o Docker simplifica a execução do projeto. O resultado são aliases curtos e fáceis de partilhar.',
    features: [
      'Encurtamento de URLs longas em aliases curtos',
      'API backend em Node.js + Express + Prisma',
      'Persistência com PostgreSQL',
      'Aplicação containerizada com Docker'
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
      'Prova de conceito de um router em React construído apenas com conceitos base, sem react-router-dom.',
    longDescription:
      'Desenvolvi o Nano Router como um exercício prático sobre o funcionamento interno dos routers. A aplicação implementa navegação usando apenas conceitos base do React, sem react-router-dom, e serve como estudo sobre como a navegação pode ser construída de forma simples e educativa.',
    features: [
      'Roteamento sem react-router-dom',
      'Implementação com conceitos base do React',
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
      'Aplicação Next.js que transforma descrições textuais em imagens através da API OpenAI DALL-E.',
    longDescription:
      'Desenvolvi o Image Generator para explorar a geração de imagens a partir de texto com a API OpenAI DALL-E. Basta descrever a ideia pretendida para receber a imagem gerada, numa experiência simples construída com Next.js, Tailwind e a API oficial da OpenAI.',
    features: [
      'Geração de imagens com OpenAI DALL-E a partir de texto',
      'Integração com a API oficial da OpenAI',
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
      'SPA React que demonstra, na prática, como o lazy loading melhora o desempenho através do carregamento sob demanda.',
    longDescription:
      'Desenvolvi o Studio SPA como um exemplo prático de otimização de desempenho em React. A aplicação demonstra lazy loading de componentes e rotas, carregando cada parte apenas quando é necessária, com o objetivo de reduzir o bundle inicial e melhorar o tempo de interação.',
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
      'Aplicação React para gerir contas e poupanças, com registo de movimentos e acompanhamento de saldo.',
    longDescription:
      'Desenvolvi o Poupança para oferecer uma forma simples de acompanhar contas e poupanças. A aplicação permite registar movimentos, consultar o saldo e manter uma visão organizada das finanças pessoais num só lugar, com uma interface construída em React e styled-components.',
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

export const cvContact = {
  location: 'Luanda, Cazenga, Angola',
  phone: '+244 943 454 709',
  email: 'manuelbentomb.223@gmail.com',
  emailAlt: 'manuelbentomb.223@hotmail.com',
  website: 'https://bentooo.vercel.app',
  websiteAlt: 'https://manuelbento.modullum.com/',
  github: 'https://github.com/manuelbento19',
  linkedin: 'https://www.linkedin.com/in/manuel-bento/'
}
