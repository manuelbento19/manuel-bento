'use client'

import { Button } from '@/components/ui/button'
import { Printer } from 'lucide-react'

export default function PrintButton({ label }: { label: string }) {
  return (
    <Button
      variant='outline'
      size='sm'
      className='no-print'
      onClick={() => window.print()}
    >
      <Printer className='size-4' />
      {label}
    </Button>
  )
}
