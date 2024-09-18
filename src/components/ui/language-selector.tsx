"use client"
import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from './dropdown-menu';
import {LanguagesIcon} from 'lucide-react';
import { Button } from './button';

export default function LanguageSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="ghost">
          <LanguagesIcon className='size-5'/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Português</DropdownMenuLabel>
        <DropdownMenuItem>Inglês</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
