import { drizzle } from "drizzle-orm/neon-http";

// const pool = new Pool({
//   connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
// });
if (!process.env.NEXT_PUBLIC_DATABASE_URL) {
  throw new Error("Database URL is not provided");
}

export const db = drizzle(process.env.NEXT_PUBLIC_DATABASE_URL);
// Compare this snippet from db/schema.types.ts:
