import { Pool } from 'pg';

const pool = new Pool({
  host: "rt41822-001.eu.clouddb.ovh.net",
  database: "targetad",
  user: "target_admin",
  password: "Targetad2025",
  port: 35723
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err));

export async function query(text: string, params?: any[]) {
  try {
    const client = await pool.connect()
    try {
      const result = await client.query(text, params)
      return result.rows
    } finally {
      client.release()
    }
  } catch (err) {
    console.error('Database query error', err)
    throw err
  }
}

export default pool;