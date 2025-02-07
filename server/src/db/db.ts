import postgres from 'postgres'

export const sql = postgres({
 host                 : 'localhost',            // Postgres ip address[s] or domain name[s]
 port                 : 5432,          // Postgres server port[s]
 database             : 'RAPID_APPLY_DEV',            // Name of database to connect to
 username             : 'postgres',            // Username of database user
 password             : 'admin',            // Password of database user
})

// export default sql;