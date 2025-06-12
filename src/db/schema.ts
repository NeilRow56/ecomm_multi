import { pgTable, serial, varchar, timestamp, text } from 'drizzle-orm/pg-core'

export const sites = pgTable('sites', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  description: text('description'),
  subdirectory: varchar('sub_directory').notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date())
})
