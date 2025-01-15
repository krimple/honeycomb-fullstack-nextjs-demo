import { Pool } from 'pg';

const HOSTNAME = process.env.NEXT_DB_HOSTNAME;
const DATABASE = process.env.NEXT_DB_DATABASE;
const USERNAME = process.env.NEXT_DB_USERNAME;
const PASSWORD = process.env.NEXT_DB_PASSWORD;

// do 1x - this is cheesy but it is a simple demo
const pool = new Pool({
    user: USERNAME,
    host: HOSTNAME,
    database: DATABASE,
    password: PASSWORD,
    port: 5432,
});

// in effect a singleton
export function getPool() {
    return pool;
}