import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
// import mongoose, { Mongoose } from 'mongoose';
import * as schema from './schema';
const sql = neon(process.env.DRIZZLE_DATABASE_URL);
export const db = drizzle(sql,{schema});
// const mongo =mongoose.connect(process.env.DRIZZLE_DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
// });