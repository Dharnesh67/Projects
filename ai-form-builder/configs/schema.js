import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const Jsonforms = pgTable("jsonforms", {
  id: serial("id").primaryKey(),
  jsonform: text("jsonform").notNull(),
  createdby: varchar("createdby").notNull(),
  createdat: varchar("createdat").notNull(),
  theme: varchar("theme").notNull(),
  background: varchar("background").notNull()
});


export const Useresponses=pgTable("useresponses",{
  id: serial("id").primaryKey(),
  jsonresponse:text('jsonresponse').notNull(),
  formid:varchar('formid').notNull(),
  createdby:varchar('createdby').default('An'),
  createdat:varchar('createdat').notNull()
})
