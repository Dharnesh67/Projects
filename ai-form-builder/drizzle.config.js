import { defineConfig } from "drizzle-kit";
 
export default defineConfig({
  schema: "./configs/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url:`postgresql://DHARMESH%20RAIKWAR_owner:r9SWGhaePJ1f@ep-delicate-cell-a1hw5yf6.ap-southeast-1.aws.neon.tech/DHARMESH%20RAIKWAR?sslmode=require`,
  }
});
