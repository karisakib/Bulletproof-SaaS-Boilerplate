require("dotenv").config();
const postgres = require("postgres");

const isProd = process.env.NODE_ENV === "PRODUCTION";
const PG_URL = isProd ? process.env.PROD_PG_URL : process.env.DEV_PG_URL;

function connectToPostgreSQL(CONN = PG_URL, PORT = 5432) {
 if (!PG_URL) {
  console.log("PostgreSQL connection string is not defined.");
  return;
 }
 try {
  const sql = postgres(PG_URL, {
   host: "", // Postgres ip address[s] or domain name[s]
   port: 5432, // Postgres server port[s]
   database: "RAPID_APPLY_DEV", // Name of database to connect to
   username: "", // Username of database user
   password: "", // Password of database user
  });
  console.log(`Connected to PostgreSQL on port: ${PORT}`);
  return sql;
 } catch (error) {
  console.log(`PostgreSQL Error: ${error}`);
 }
}

// const sql = postgres(PG_URL, {
//  host: "", // Postgres ip address[s] or domain name[s]
//  port: 5432, // Postgres server port[s]
//  database: "", // Name of database to connect to
//  username: "", // Username of database user
//  password: "", // Password of database user
// });

// const sql = connectToPostgreSQL()
// module.exports = sql;
