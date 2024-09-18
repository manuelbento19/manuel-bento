"use client"
import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from './dropdown-menu';
import {LanguagesIcon} from 'lucide-react';
import { Button } from './button';
import { useLocale } from 'next-intl';
import { setUserLocale } from '@/services/locale';
import { Locale } from '@/i18n/config';

const locales = [
  {
    key: "pt",
    name: "Português"
  },
  {
    key: "en",
    name: "Inglês"
  }
]

export default function LanguageSelector() {
  const locale = useLocale();

  const changeLocale = (value: string) => {
    setUserLocale(value as Locale);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost">
          <LanguagesIcon className='size-5'/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={locale} onValueChange={changeLocale}>
        {locales.map(item=> <DropdownMenuRadioItem key={item.key} value={item.key}>{item.name}</DropdownMenuRadioItem>)}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
