import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const forms = pgTable("forms", {
  id: serial("id").primaryKey(),
  jsonform: text("jsonform").notNull(),
  createdby: varchar("createdby").notNull(),
  createdat: varchar("createdat").notNull(),
});
