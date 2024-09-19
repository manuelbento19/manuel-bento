import { Project } from "@/types";

export const skills = [
    {
        name: "Frontend",
        icon: "fluent:phone-desktop-24-regular",
        list: [
            { name: 'JavaScript', icon: 'skill-icons:javascript' },
            { name: 'TypeScript', icon: 'skill-icons:typescript' },
            { name: 'CSS', icon: 'skill-icons:css' },
            { name: 'React', icon: 'skill-icons:react-dark' },
            { name: 'Next.js', icon: 'skill-icons:nextjs-light' },
            { name: 'Tailwind CSS', icon: 'skill-icons:tailwindcss-light' },
            { name: 'React Native', icon: 'vscode-icons:file-type-reactts' },
            { name: 'Expo', icon: 'file-icons:expo' },
            { name: 'Astro', icon: 'simple-icons:astro' },
            { name: 'Sass', icon: 'skill-icons:sass' },
            { name: 'Styled Components', icon: 'skill-icons:styledcomponents'},
            { name: 'Storybook', icon: 'logos:storybook-icon'},
            
        ],
    },
    {
        name: "Backend",
        icon: "fluent-mdl2:server-enviroment",
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
            { name: 'Redis', icon: 'devicon:redis' },
        ]
    },
    {
        name: "Tools",
        icon: "fluent:window-dev-tools-24-regular",
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
            { name: 'OpenAI', icon: "simple-icons:openai"},
            { name: 'Trello', icon: 'devicon:trello' },
            { name: 'VSCode', icon: 'vscode-icons:file-type-vscode' },
            { name: 'Visual Studio', icon: 'devicon:visualstudio' },
        ]
    }
];

export const projects:Project[] = [
    {
        title: "MyFolio",
        wallpalper: "/projects/myfolio.png",
        description: "MyFolio é um projeto que permite criar portfólios personalizados sem precisar de habilidades de codificação. Com uma interface intuitiva, você pode facilmente montar um site profissional, adicionar seu trabalho e destacar suas habilidades de forma rápida e simples.",
        link:{
            repo: "https://github.com/manuelbento19/my-folio",
            host: "https://my-folio-wheat.vercel.app/",
        },
        techs:["mdi:react","ri:nextjs-fill","mdi:tailwind","simple-icons:zod"]
    },
    {
        title: "Image4Text",
        wallpalper: "/projects/image4text.png",
        description: "Uma app para conversão de imagem em texto. A app pemite extrair textos de imagens para automatizar o processamento de textos.",
        link:{
            repo: "https://github.com/manuelbento19/image4text",
            host: "https://image4text.vercel.app/",
        },
        techs:["mdi:react","bxl:typescript","devicon-plain:css3","file-icons:styledcomponents"]
    },
    {
        title: "Port Scanner",
        wallpalper: "/projects/portscanner.png",
        description: "É um scanner de rede gratuito e de código aberto. É usado para descobrir hosts e serviços em uma rede de computadores, enviando pacotes e analisando as respostas.",
        link:{
            repo: "https://github.com/manuelbento19/port-scanner",
        },
        techs:["mdi:nodejs","bxl:typescript","carbon:tcp-ip-service"]
    },
    {
        title: "OllamaBot",
        wallpalper: "/projects/ollama.png",
        description: "É uma aplicação inovadora que utiliza a imagem de contêiner Llama para implementar um assistente de conversação inteligente, semelhante ao GPT, capaz de compreender e gerar respostas coerentes em uma variedade de contextos, proporcionando uma experiência de interação natural e eficaz.",
        link:{
            repo: "https://github.com/manuelbento19/ollama-bot",
        },
        techs:["mdi:react","bxl:typescript","mdi:docker","simple-icons:ollama","mdi:sass"]
    },
    {
        title: "DaBanda OSS",
        wallpalper: "/projects/dabanda.png",
        description: "É uma plataforma dedicada a promover e destacar projetos de código aberto de diversas áreas e temáticas. Oferece uma maneira fácil e acessível de descobrir e contribuir para projetos de código aberto, impulsionando a inovação e o compartilhamento de conhecimento.",
        link:{
            repo: "https://github.com/manuelbento19/dabanda-oss",
            host: "https://dabanda-oss.vercel.app/",
        },
        techs:["mdi:react","ri:nextjs-fill","mdi:tailwind"]
    },
    {
        title: "Unsplash Angular",
        wallpalper: "/projects/unangular.png",
        description: "Um aplicativo desenvolvido em angular para buscar imagens do unsplash.",
        link:{
            repo: "https://github.com/manuelbento19/unsplash-angular",
        },
        techs:["mdi:angular","bxl:typescript","mdi:sass"]
    },
    {
        title: "URL Shortener",
        wallpalper: "/projects/url-shortner.png",
        description: "Um encurtador de URL é um site que reduz o comprimento do seu URL (Uniform Resource Locator). A ideia é minimizar o endereço da página da web em algo que seja mais fácil de lembrar e rastrear.",
        link:{
            repo: "https://github.com/manuelbento19/url-shortener",
        },
        techs:["mdi:nodejs","bxl:typescript","simple-icons:express","simple-icons:prisma","akar-icons:postgresql-fill","mdi:docker"]
    },
    {
        title: "Nano Router",
        wallpalper: "/projects/nanorouter.png",
        description: "Uma pequena app em react para demonstrar como fazer roteamento sem a necessidade do react-router-dom, usando apenas conceitos básicos do react.js. Serviu como prova de conceito de que com base de react podes fazer um monte de coisas, incluíndo roteamento.",
        link:{
            repo: "https://github.com/manuelbento19/nano-router",
        },
        techs:["mdi:react","bxl:typescript","devicon-plain:css3"]
    },
    {
        title: "Image Generator",
        wallpalper: "/projects/image-generator.png",
        description: "Aplicativo que se integra perfeitamente a API OpenAI DALL-E e gera imagens cativantes com base em solicitações textuais.",
        link:{
            repo: "https://github.com/manuelbento19/image-generator",
        },
        techs:["mdi:react","ri:nextjs-fill","mdi:tailwind","simple-icons:openai"]
    },
    {
        title: "Studio SPA",
        wallpalper: "/projects/studio-spa.png",
        description: "Um aplicativo React para mostrar como otimizar o desempenho usando carregamento lento (lazy loading)",
        link:{
            repo: "https://github.com/manuelbento19/studio-spa-portfolio",
            host: "https://studio-spa-portfolio.vercel.app/"
        },
        techs:["mdi:react","mdi:tailwind","ph:phosphor-logo"]
    },
    {
        title: "Poupança",
        wallpalper: "/projects/poupanca.png",
        description: "Uma aplicação desenvolvida com o Reactjs com o objetivo de gerir as tuas contas/poupanças.",
        link:{
            repo: "https://github.com/manuelbento19/poupanca",
            host: "https://poupanca.vercel.app/"
        },
        techs:["mdi:react","devicon-plain:css3","file-icons:styledcomponents"]
    }
]