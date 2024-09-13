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