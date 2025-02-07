# Hierarchical Config

Use hierarchical config to organize environment variables by different environments

```javascript
const config = {
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
}

// 👎 The object name already holds the context
const user = {
  userName: '...',
  userEmail: '...',
  userAddress: '...',
}

// 👍 Remove the unnecessary prefix
const user = {
  name: '...',
  email: '...',
  address: '...',
}

const config = {
  storage: {
    bucketName: process.env.S3_BUCKET_NAME,
  },
  database: {
    name: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
}

export default config
```