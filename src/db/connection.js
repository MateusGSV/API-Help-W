const { Pool } = require("pg");
const fs = require("fs");

// Database connection configuration
const dbConfig = {
  user: "postgres",
  password: "WWZ1oeqfnsdUqZna",
  host: "floridly-cool-tayra.data-1.use1.tembo.io",
  port: 5432,
  database: "postgres",
  max: 10,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 8000,
  ssl: {
    ca: fs.readFileSync("/home/mateus/Downloads/sandbox/src/certificados/ca.crt").toString(),
  },
};

const pool = new Pool(dbConfig);

(async () => {
  try {
    await pool.query("SELECT 1");
    console.log("Conectado ao banco de dados PostgreSQL");
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  }
})();

pool.on("error", (err) => {
  console.error("Erro inesperado no cliente do pool:", err);
  process.exit(-1);
});

module.exports = pool;
