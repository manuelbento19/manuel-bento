"use client"
import React, { useMemo } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from './dropdown-menu';
import {LanguagesIcon} from 'lucide-react';
import { Button } from './button';
import { useLocale, useTranslations } from 'next-intl';
import { setUserLocale } from '@/services/locale';
import { Locale } from '@/i18n/config';

export default function LanguageSelector() {
  const translation = useTranslations('locales');
  const locale = useLocale();

  const changeLocale = (value: string) => {
    setUserLocale(value as Locale);
  }

  const locales = useMemo(()=>[
    {
      key: "pt",
      name: translation("pt")
    },
    {
      key: "en",
      name: translation("en")
    }
  ],[translation])

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
