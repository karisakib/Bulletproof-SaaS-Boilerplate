import { config } from "dotenv";

// Load the appropriate .env file based on NODE_ENV
const ENV = process.env.NODE_ENV as keyof typeof appConfig || "development";
config({ path: `../../.env.${ENV}` });

const appConfig = {
  development: {
    env: "development",
    port: process.env.PORT || 3000,
    db: {
      postgres: process.env.POSTGRES_DEV,
      mongo: process.env.MONGO_DEV,
      redis: process.env.REDIS_DEV,
    },
    storage: { bucket: process.env.S3_BUCKET_DEV },
    auth: { jwtSecret: process.env.JWT_SECRET_DEV },
    logging: { level: process.env.LOG_LEVEL_DEV || "debug" },
  },

  stage: {
    env: "stage",
    port: process.env.PORT || 3000,
    db: {
      postgres: process.env.POSTGRES_STAGE,
      mongo: process.env.MONGODB_STAGE,
      redis: process.env.REDIS_STAGE,
    },
    storage: { bucket: process.env.S3_BUCKET_STAGE },
    auth: { jwtSecret: process.env.JWT_SECRET_STAGE },
    logging: { level: process.env.LOG_LEVEL_STAGE || "info" },
  },

  production: {
    env: "production",
    port: process.env.PORT || 3000,
    db: {
      postgres: process.env.POSTGRES_PROD,
      mongo: process.env.MONGODB_PROD,
      redis: process.env.REDIS_PROD,
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
    logging: { level: process.env.LOG_LEVEL_PROD || "warn" },
  },
};

// Export the configuration for the current environment
export default appConfig[ENV];
