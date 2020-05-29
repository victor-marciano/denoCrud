import { Database } from 'https://deno.land/x/denodb/mod.ts';
import { config } from "https://deno.land/x/dotenv/mod.ts";

const { 
    DATABASE_HOST,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_NAME 
} = config({ safe: true });

const db = new Database('mysql', {
    host: DATABASE_HOST,
    username: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME
});

export default db;