export type Project = {
    title: string;
    description: string;
    link: {
        repo: string;
        host?: string;
    }
    techs: string[];
    wallpalper: string;
}

export type Article = {
    title: string;
    date: Date | string;
    description: string;
    tags: string[];
    url: string;
}