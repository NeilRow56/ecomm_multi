'use client'

import { useForm } from 'react-hook-form'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'

type Props = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const AddSiteForm = ({ setOpen, open }: Props) => {
  const form = useForm()
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create site</DialogTitle>
          <DialogDescription>Create your site here.</DialogDescription>
          <Form {...form}>
            <form className='space-y-1'>
              <Input />

              {/* <Button type='submit'>Save</Button> */}
              <Button
                type='submit'
                size='lg'
                disabled={form.formState.isSubmitting}
                className='button col-span-2 mt-4 w-full'
              >
                {form.formState.isSubmitting ? 'Submitting' : 'Save'}
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
