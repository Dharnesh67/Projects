import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
const sql = neon("postgresql://DHARMESHRAIKWAR_owner:aFGjsiCDH24K@ep-hidden-leaf-a106h2a7.ap-southeast-1.aws.neon.tech/DHARMESHRAIKWAR?sslmode=require");
export const db = drizzle(sql,{schema});
// const mongo =mongoose.connect(process.env.DRIZZLE_DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// });