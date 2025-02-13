require("dotenv").config();

const config = {
 env: process.env.NODE_ENV || 'development',
 port: process.env.PORT || 3000,

 dev: {
   databases: {
     redis: process.env.REDIS_DEV,
     mongo: process.env.MONGODB_DEV,
     postgres: process.env.POSTGRES_DEV
   },
   storage: { bucket: process.env.S3_BUCKET_DEV },
   auth: { jwtSecret: process.env.JWT_SECRET_DEV },
   logging: { level: process.env.LOG_LEVEL_DEV || 'debug' },
 },

 stage: {
   databases: {
     redis: process.env.REDIS_STAGE,
     mongo: process.env.MONGODB_STAGE,
     postgres: process.env.POSTGRES_STAGE
   },
   storage: { bucket: process.env.S3_BUCKET_STAGE },
   auth: { jwtSecret: process.env.JWT_SECRET_STAGE },
   logging: { level: process.env.LOG_LEVEL_STAGE || 'info' },
 },

 prod: {
   databases: {
     redis: process.env.REDIS_PROD,
     mongo: process.env.MONGODB_PROD,
     postgres: process.env.POSTGRES_PROD
   },
   storage: { bucket: process.env.S3_BUCKET_PROD },
   auth: { 
     jwtSecret: process.env.JWT_SECRET_PROD,
     encryptionKey: process.env.ENCRYPTION_KEY_PROD,
   },
   secrets: {
     developer: process.env.DEVELOPER_SECRET,
     main: process.env.MAIN_KEY,
   },
   logging: { level: process.env.LOG_LEVEL_PROD || 'warn' },
 },
};

export default config



















// TYPESCRIPT CONVERSION
// import { config } from "process";

// const PORT = process.env.PORT || 3000;
// const { MONGODB_URL } = process.env;

// export { PORT, MONGODB_URL }