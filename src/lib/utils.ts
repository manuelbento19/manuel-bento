import { clsx, type ClassValue } from 'clsx'
import { format, parseISO } from 'date-fns'
import { pt } from 'date-fns/locale'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string){
  const isoDate = parseISO(date);
  return format(isoDate,`d 'de' LLLL 'de' yyyy`,{locale: pt});
}