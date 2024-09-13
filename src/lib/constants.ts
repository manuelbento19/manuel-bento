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
            { name: 'Trello', icon: 'devicon:trello' },
            { name: 'VSCode', icon: 'vscode-icons:file-type-vscode' },
        ]
    }
];

export const projects:Project[] = [
    {
        title: "MyFolio",
        wallpalper: "/projects/myfolio.png",
        description: " MyFolio é um projeto que permite criar portfólios personalizados sem precisar de habilidades de codificação. Com uma interface intuitiva, você pode facilmente montar um site profissional, adicionar seu trabalho e destacar suas habilidades de forma rápida e simples.",
        link:{
            repo: "https://github.com/manuelbento19/my-folio",
            host: "https://my-folio-wheat.vercel.app/",
        },
        techs:["mdi:react","ri:nextjs-fill","mdi:tailwind","simple-icons:zod"]
    }
]