import { AbstractIntlMessages } from 'next-intl'
import { type Article } from '@/lib/articles'

export type Project = {
  title: string
  description: string
  longDescription?: string
  features?: string[]
  link: {
    repo: string
    host?: string
  }
  techs: string[]
  wallpaper: string
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
    features: string;
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
  },
  contact: {
    title: string;
    description: string;
  },
  common: {
    back: string;
    previous: string;
    next: string;
    readTime: string;
  },
  claps: {
    ariaLabel: string;
    clapping: string;
    clapped: string;
    alreadyClapped: string;
    error: string;
  }
}
