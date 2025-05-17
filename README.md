# Bulletproof SaaS Boilerplate

#### Table of Contents

<!-- [Toc] -->

## Overview

The **Bulletproof SaaS Boilerplate** is a fully scalable, production-grade foundation for building SaaS applications. It follows best practices, enforces strong security, and integrates essential third-party services to accelerate development and deployment.

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![Motion](https://img.shields.io/badge/Motion-000?logo=framer&logoColor=FFF) ![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-000?logo=shadcn/ui&logoColor=FFF) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white) ![Zustand](https://img.shields.io/badge/Zustand-000000?logo=react&logoColor=white) ![React Router](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=white) ![React Query](https://img.shields.io/badge/React%20Query-FF4154?logo=reactquery&logoColor=white) ![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white) ![Stripe](https://img.shields.io/badge/Stripe-008CDD?logo=stripe&logoColor=white) ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?logo=swagger&logoColor=black) ![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white) ![Playwright](https://img.shields.io/badge/Playwright-45BA6B?logo=microsoftedge&logoColor=white) ![PostHog](https://img.shields.io/badge/PostHog-FE4370?logo=posthog&logoColor=white) ![PM2](https://img.shields.io/badge/PM2-2B037A?logo=pm2&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=githubactions&logoColor=white) ![AWS S3](https://img.shields.io/badge/AWS%20S3-569A31?logo=amazons3&logoColor=white) ![Mailgun](https://img.shields.io/badge/Mailgun-F06A33?logo=mailgun&logoColor=white) ![Twilio](https://img.shields.io/badge/Twilio-F22F46?logo=twilio&logoColor=white) ![BunnyCDN](https://img.shields.io/badge/BunnyCDN-FF914D?logo=bunnycdn&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Testing Library](https://img.shields.io/badge/Testing%20Library-E33332?logo=testinglibrary&logoColor=white) ![Cloudinary](https://img.shields.io/badge/Cloudinary-F38020?logo=cloudinary&logoColor=white) ![JSON Web Tokens](https://img.shields.io/badge/JSON%20Web%20Tokens-000000?logo=jsonwebtokens&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![MDX](https://img.shields.io/badge/MDX-1B1F24?logo=mdx&logoColor=white) ![Immer](https://img.shields.io/badge/Immer-00DC82?logo=immer&logoColor=white)

## Why Bulletproof SaaS?

- No longer have to hardcode business logic to mock the minimum viable product.
- No relying on 3rd parties for authentication. 100% owenership of your data.
- Standardized API responses.
- Built using battle-tested technologies.
- Testing pre-configured.
- Scalable project structure.
- Global app, header, configs.
- Auth baked in with best practices.
- User activity history.
- System Inactivity Timeout.
- Admin Dashboard
- Financial Dashboard
- OpenAPI Swagger documentation
- Robust Error Handling


## Standardized JSON Reponses

```json
{
 "status": "success",
 "message": "Users fetched successfully",
 "meta": {
  "totalRecords": 2500,
  "limit": 50,
  "offset": 100,
  "currentPage": 3,
  "totalPages": 50,
  "sortBy": "createdAt",
  "sortOrder": "asc",
  "hasNextPage": true,
  "hasPreviousPage": true,
  "nextOffset": 150,
  "previousOffset": 50,
  "nextPage": "/api/users?offset=150&limit=50",
  "previousPage": "/api/users?offset=50&limit=50"
 },
 "data": [
  {
   "id": 101,
   "name": "John Doe",
   "email": "john.doe@example.com",
   "role": "admin",
   "createdAt": "2024-02-17T12:34:56Z",
   "profile": {
    "age": 30,
    "location": "New York, USA",
    "avatarUrl": "https://example.com/avatars/101.jpg"
   }
  },
  {
   "id": 102,
   "name": "Jane Smith",
   "email": "jane.smith@example.com",
   "role": "user",
   "createdAt": "2024-01-05T08:12:30Z",
   "profile": {
    "age": 28,
    "location": "Los Angeles, USA",
    "avatarUrl": "https://example.com/avatars/102.jpg"
   }
  }
 ]
}
```

## Financial Tracking & Analytics:

```plain
/summary/annual# Annual summary
/summary/quarterly # Quarterly summary
/summary/monthly # Monthly summary

/earnings/quarterly earnings # Quarterly earnings
/earnings/monthly # Monthly earnings
/earnings/weekly # Weekly earnings

- Monthly Recurring Revenue
- Average Revenue Per User
- Gross Margin
- Monthly Unique Visitors
- Customer Conversion Rate
- Customer Retention Rate
- Customer Lifetime Value
- Recurring Monthly Revenue
- Churn Rate
- Product Sign Up Rate
- Product Referral Rate Per Influencer

// TODO
Customer Acquisition Cost
Support Ticket Creation Rate
Customer Feedback Rate
```

### Database Use Cases

🔹 PostgreSQL for:
✅ User Accounts – Emails, passwords (hashed), usernames
✅ Authentication & Authorization – Roles, permissions
✅ Subscriptions & Payments – Stripe/PayPal integration
✅ Orders & Transactions – E-commerce, invoices
✅ Relationships between data – Users & orders, followers, etc.
✅ Reports & Analytics – If data is structured and relational

🔹 MongoDB for:
✅ User Activity Logs – Tracking user logins, errors, analytics
✅ Audit Logs – Storing system events (e.g., password changes)
✅ CMS / Blog Content – Storing articles, comments, etc.
✅ Product Catalog – E-commerce product listings
✅ Notifications / Messages – Storing chat messages, in-app notifications
✅ IoT / Sensor Data – When real-time, unstructured data is needed

🔹 Redis for:
✅ Session Management – Store user sessions, login tokens
✅ Caching – Cache frequently accessed API responses
✅ Rate Limiting – Prevent abuse by limiting API requests
✅ Leaderboard / Ranking Systems – Store real-time game scores
✅ Background Jobs / Queues – Use with BullMQ to manage tasks

### Summary of Speed Ratings

| Response Time | Rating                    | Notes                                                        |
| ------------- | ------------------------- | ------------------------------------------------------------ |
| **Sub-10ms**  | 🚀 **Excellent**          | Unusually fast, likely serving cached content or simple HTML |
| **10-50ms**   | 🔥 **Very Good**          | Well-optimized SSR with efficient rendering                  |
| **50-200ms**  | ✅ **Good**               | Normal range for SSR, including API/database calls           |
| **200-500ms** | ⚠️ **Needs Optimization** | Potential slow middleware, DB queries, or API bottlenecks    |
| **500ms+**    | ❌ **Bad**                | Poor performance; needs major fixes                          |


## Example with Additional Data:

```json
{
 "level": "info", // Log level (e.g., info, warn, error)
 "message": "Request Log", // A label for the log entry
 "method": "GET", // The HTTP method used for the request
 "url": "http://localhost:3000/users?id=123&name=JohnDoe", // The full request URL with query parameters
 "headers": {
  // HTTP headers sent with the request
  "host": "localhost:3000",
  "connection": "keep-alive",
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
  "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
  "accept-encoding": "gzip, deflate, br",
  "accept-language": "en-US,en;q=0.9",
  "cookie": "sessionId=abc123; userId=456"
 },
 "query": {
  // Parsed query parameters from the URL
  "id": "123",
  "name": "JohnDoe"
 },
 "body": {}, // Parsed request body (empty for GET requests)
 "cookies": {
  // Cookies sent with the request
  "sessionId": "abc123",
  "userId": "456"
 },
 "ip": "::1", // The client's IP address
 "protocol": "http", // The request protocol (HTTP or HTTPS)
 "hostname": "localhost", // The hostname of the server handling the request
 "originalUrl": "/users?id=123&name=JohnDoe", // The original request URL
 "params": {}, // Route parameters (if applicable)
 "secure": false, // Indicates if the request was made over HTTPS
 "subdomains": [], // List of subdomains extracted from the request
 "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36", // User-Agent string from headers
 "customHeaders": {
  // Custom application headers like request ID or authentication tokens
  "X-Request-ID": "abc123456",
  "X-Auth-Token": "Bearer [REDACTED]" // Mask sensitive parts
 },
 "cacheHeaders": {
  // Headers related to cache control
  "Cache-Control": "no-cache",
  "If-None-Match": "W/\"123abc\"",
  "If-Modified-Since": "Mon, 05 Jul 2024 07:28:00 GMT"
 },
 "referrer": "http://example.com", // The referrer URL from which the request originated
 "origin": "http://example.com", // The origin of the request
 "sessionId": "s12345", // Unique session identifier
 "sessionData": {
  // Metadata about the session, if available
  "user": {
   "id": "u123",
   "name": "John Doe"
  }
 },
 "userAgentDetails": {
  // Parsed User-Agent details (browser, OS, device)
  // This can be done using libraries like `useragent` or `ua-parser-js`
  "browser": "Chrome",
  "os": "Windows 10",
  "device": "Desktop"
 },
 "geoLocation": {
  // Estimated geo-location based on IP lookup
  // This requires a third-party API (e.g., MaxMind, IPStack).
  "country": "US",
  "region": "CA",
  "city": "San Francisco"
 },
 "responseStatus": 200, // Response HTTP status code
 "responseContentType": "application/json", // Content type of the response
 "responseSize": "256", // Size of the response in bytes (if available)
 "timestamp": "2024-09-03T12:34:56.789Z" // Timestamp when the log entry was created
}
```

#### Optional log objects

##### Authorization and Authentication

If your application uses authorization or authentication mechanisms, logging related headers such as `Authorization` or `Cookie` might be useful. Be cautious about logging sensitive information like tokens or credentials.

```js
authorization: req.get('Authorization'), // Be careful with sensitive info
```

You might also want to strip out sensitive parts of the authorization header, like:

```js
authorization: req.get('Authorization') ? 'Bearer [REDACTED]' : null,
```

##### Custom Application Context

Depending on your application, you might have custom context or metadata that you want to log, such as a user ID (if the user is authenticated), request ID (if you are tracking requests across microservices), or other application-specific data.

```js
userId: req.user ? req.user.id : null,
requestId: req.get('X-Request-ID'),
```

## Error Information stored in dedicated error log table

- If an error occurs during the request, logging details about the error can be very helpful for debugging. This can include the error message, stack trace, and any relevant request data.

```js
app.use((err, req, res, next) => {
 logger.error("Request Error", {
  errorMessage: err.message,
  errorStack: err.stack,
  method: req.method,
  url: fullUrl,
  body: req.body,
  headers: req.headers,
  ip: req.ip,
 });
 next(err);
});
```


## Testing

### Testing The Frontend

##### Unit Tests (Jest, Testing Library)

Frontend unit tests are conducting using Jest and Testing Library (formerly known as React Testing Library).

##### E2E Tests (Playwright, Axe)

Frontend End-to-end tests are conducted using Playwright with a11y testing with the playwright axe integration.

##### Performance Tests (Lighthouse CLI)

Frontend performance tested using Google's Lighthouse CLI. The congif file is preset to 90 as a passing score on each metric.

### Testing The Backend

Test users and test data are setup and pre-configured to test user permision, authentication, api resources.

##### Unit Tests (Jest, Supertest)

Backend unit tests are conducting using Jest and Supertest.

##### Integration Tests (Jest)

Integration tests are conducted using the Arrange-Act-Assert pattern.

```javascript
describe("User Service", () => {
 it("Should create a user given correct data", async () => {
  // 1. Arrange - prepare the data, create any objects you need
  const mockUser = {
   // ...
  };
  const userService = createUserService(mockLogger, mockQueryBuilder);

  // 2. Act - execute the logic that you're testing
  const result = userService.create(mockUser);

  // 3. Assert - validate the expected result
  expect(mockLogger).toHaveBeenCalled();
  expect(mockQueryBuilder).toHaveBeenCalled();
  expect(result).toEqual(/** ... */);
 });
});
```

##### Load Tests (Artillery)

Load tests are ran using Artillery. See the artillery.yml file.

## 🤝 Contributing

### Clone the repo

```bash
git clone https://github.com/xxxxx/xxxxxx
cd xxxxx
```

### Build the project

```bash
command
```

### Run the project

```bash
command
```

### Run the tests

```bash
command
```

### Submit a pull request

If you'd like to contribute, please fork the repository and open a pull request to the `main` branch.