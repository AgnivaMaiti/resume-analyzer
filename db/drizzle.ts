import { drizzle } from "drizzle-orm/neon-http";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
});

export const db = drizzle({ client: pool });
