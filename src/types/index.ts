import { Article } from 'contentlayer/generated'
import { AbstractIntlMessages } from 'next-intl'

export type Project = {
  title: string
  description: string
  link: {
    repo: string
    host?: string
  }
  techs: string[]
  wallpalper: string
}

export type TranslateDTO = AbstractIntlMessages & {
  locales: {
    pt: string
    en: string
  }
  layout: {
    header: {
      label: string
      link: string
    }[]
  }
  about: {
    hero: {
      title: string
      description: string
      data: string[]
    }
    headings: string[]
    education: {
      title: string
      provider: string
      started_date: string
      due_date: string
    }[],
    license: {
      title: string
      provider: string
      due_date: string,
      link?: string;
    }[],
    work: {
      title: string
      company: string
      started_date: string
      due_date: string
      description: string
      list: string[]
    }[]
  },
  projects: {
    title: string;
    description: string;
    data: Project[]   
  },
  articles: {
    title: string;
    description: string;
    data: Article[]
  },
  notFound: {
    title: string;
    subtitle: string;
    action: string;
  }
}
