import { sql } from "../db.db";
import { v4 } from "uuid";

// https://dev.to/opeoginni/how-to-use-the-postgresjs-library-jh

// Create the users table
async function createUsersTable() {
  try {
    await sql`
     CREATE TABLE IF NOT EXISTS users (
       id SERIAL PRIMARY KEY,
       first_name VARCHAR(100) NOT NULL,
       last_name VARCHAR(100) NOT NULL,
       email VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     )
   `;
    console.log('Users table created successfully');
    
    // Corrected INSERT statement with single quotes for string values
    await sql`
     INSERT INTO users (first_name, last_name, email, password)
     VALUES ('John', 'Doe', 'johndoe@email.com', 'password');
   `;
    console.log("Inserted dummy user successfully");

    const users = await sql`
     SELECT * FROM users
   `;
    console.log("Queried users table successfully", users);
  } catch (error) {
    console.error('Error creating users table:', error);
  } finally {
    // Close the connection
    sql.end();
  }
}

createUsersTable();



// Look into umzug for migrations
// https://github.com/sequelize/umzug