import { clsx, type ClassValue } from 'clsx'
import { format, parseISO } from 'date-fns'
import { enUS, pt } from 'date-fns/locale'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string, locale: 'pt' | 'en' = 'pt') {
  const isoDate = parseISO(date)
  return format(isoDate, `d MMMM yyyy`, { locale: locale === 'pt' ? pt : enUS })
}
