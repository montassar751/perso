const { Pool } = require("pg");

const pool = new Pool({
  host: "192.168.1.17",
  database: "perso",
  user: "postgres",
  password: "postgres",
  port: 5432, // Default PostgreSQL port
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err));

module.exports = pool;
