import { EmptyState } from '@/components/dashboard/empty-state'

import { AddSiteButton } from '@/modules/sites/components/add-site-button'

import React from 'react'

const SitesPage = () => {
  return (
    <>
      <div className='flex w-full justify-end'>
        <AddSiteButton />
      </div>
      <EmptyState
        title='You dont have any Sites created'
        description='You currently dont have any Sites. Please create some so that you can
        see them right here!'
      />
    </>
  )
}

export default SitesPage
