'use client'

import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import { useState } from 'react'
import { AddSiteForm } from './add-site-form'

export const AddSiteButton = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button className='cursor-pointer self-end' onClick={() => setOpen(true)}>
        <PlusIcon />
        Add Site
      </Button>
      <AddSiteForm open={open} setOpen={setOpen} />
    </>
  )
}
