import { sites } from '@/db/schema'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'

export const insertSiteSchema = createInsertSchema(sites, {
  name: schema =>
    schema
      .min(1, 'Name is required')
      .max(35, 'Maximum of 35 characters for name'),
  description: schema =>
    schema
      .min(1, 'Description is required')
      .max(150, 'Maximum of 150 characters for description'),
  subdirectory: schema =>
    schema
      .min(1, 'Subdirectory is required')
      .max(40, 'Maximum of 40 characters for subdirectory name')
      .toLowerCase()
})

export const selectSiteSchema = createSelectSchema(sites)

export type insertSiteSchemaType = typeof insertSiteSchema

export type selectSiteSchemaType = typeof selectSiteSchema
