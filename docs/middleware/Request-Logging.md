Example Request Log:

```json
{
  "level": "info",
  "message": "Request Log",
  "method": "GET",
  "url": "http://localhost:3000/users?id=123&name=JohnDoe",
  "headers": {
    "host": "localhost:3000",
    "connection": "keep-alive",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9",
    "cookie": "sessionId=abc123; userId=456"
  },
  "query": {
    "id": "123",
    "name": "JohnDoe"
  },
  "body": {},
  "cookies": {
    "sessionId": "abc123",
    "userId": "456"
  },
  "ip": "::1",
  "protocol": "http",
  "hostname": "localhost",
  "originalUrl": "/users?id=123&name=JohnDoe",
  "params": {},
  "secure": false,
  "subdomains": [],
  "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
  "timestamp": "2024-09-03T12:34:56.789Z"
}
```

Explanation of the Logged Object:

•	level: The log level, which is “info” in this case.
•	message: A label for the log entry, which we’ve set to “Request Log”.
•	method: The HTTP method used for the request (e.g., “GET”).
•	url: The full URL of the request, including the protocol, host, and path with query parameters.
•	headers: An object containing all the HTTP headers sent with the request.
•	query: The query parameters parsed from the URL.
•	body: The parsed request body (empty in this example since it’s a GET request).
•	cookies: An object representing the cookies sent with the request.
•	ip: The IP address of the client making the request.
•	protocol: The protocol used (e.g., “http”).
•	hostname: The hostname of the server handling the request.
•	originalUrl: The original request URL as received by the server.
•	params: Route parameters (empty in this example since there are no route parameters).
•	secure: A boolean indicating whether the request was made over HTTPS.
•	subdomains: An array of subdomains in the request (empty in this example).
•	userAgent: The User-Agent string from the request headers.
•	timestamp: The timestamp when the log entry was created.

### 1. **Session Data**
   - If your application uses session management (e.g., with `express-session`), you may want to log session-related information such as the session ID or any session variables.
   
sessionId: req.sessionID,
sessionData: req.session,

### 2. **Custom Headers**
   - If your application uses custom headers for specific purposes (e.g., `X-Request-ID`, `X-Auth-Token`), it’s a good idea to log these as well.

   customHeaders: {
     'X-Request-ID': req.get('X-Request-ID'),
     'X-Auth-Token': req.get('X-Auth-Token'),
     // Add other custom headers as needed
   },
 
### 3. **Cache-Related Headers**
   - If caching is important in your application, you might want to log cache-related headers like `Cache-Control`, `If-None-Match`, or `If-Modified-Since`.

   cacheHeaders: {
     'Cache-Control': req.get('Cache-Control'),
     'If-None-Match': req.get('If-None-Match'),
     'If-Modified-Since': req.get('If-Modified-Since'),
   },

### 4. **Authorization and Authentication**
   - If your application uses authorization or authentication mechanisms, logging related headers such as `Authorization` or `Cookie` might be useful. Be cautious about logging sensitive information like tokens or credentials.

   authorization: req.get('Authorization'),  // Be careful with sensitive info

   You might also want to strip out sensitive parts of the authorization header, like:

   authorization: req.get('Authorization') ? 'Bearer [REDACTED]' : null,

### 5. **Referrer and Origin**
   - Logging the `Referer` (or `Referrer`) and `Origin` headers can be useful for understanding where the request is coming from.

   referrer: req.get('Referer'),
   origin: req.get('Origin'),

### 6. **User-Agent Details**
   - While you’re already logging the `User-Agent` string, you might want to parse it for more detailed analytics (e.g., browser, operating system). This can be done using libraries like `useragent` or `ua-parser-js`.

   userAgentDetails: {
     browser: parsedUserAgent.browser,
     os: parsedUserAgent.os,
     device: parsedUserAgent.device,
   },

### 7. **Geo-Location Data**
   - If your application captures geo-location data (e.g., via IP lookup), logging the user’s approximate location (city, region, country) might be useful.

   geoLocation: {
     country: 'US',
     region: 'CA',
     city: 'San Francisco',
   },

   This would typically require an additional service or middleware to provide the geo-location data based on the IP address.

### 8. **Request Timing**
   - You might want to log how long it took to process the request. This can be done by capturing the start time at the beginning of the request and calculating the duration after the response is sent.

   const startTime = process.hrtime();

   app.use((req, res, next) => {
     res.on('finish', () => {
       const diff = process.hrtime(startTime);
       const duration = diff[0] * 1e3 + diff[1] * 1e-6; // in milliseconds
       logger.info('Request Duration', { duration: `${duration.toFixed(3)} ms` });
     });
     next();
   });
   ```

### 9. **Response Details**
   - Although Morgan is handling response logging, you might want to ensure specific response details like status code, content type, and response size are also logged.

   responseStatus: res.statusCode,
   responseContentType: res.get('Content-Type'),
   responseSize: res.get('Content-Length'),

### 10. **Custom Application Context**
   - Depending on your application, you might have custom context or metadata that you want to log, such as a user ID (if the user is authenticated), request ID (if you are tracking requests across microservices), or other application-specific data.

   userId: req.user ? req.user.id : null,
   requestId: req.get('X-Request-ID'),

### 11. **Error Information**
   - If an error occurs during the request, logging details about the error can be very helpful for debugging. This can include the error message, stack trace, and any relevant request data.

   app.use((err, req, res, next) => {
     logger.error('Request Error', {
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

```json
// Example with Additional Data:
{
  "level": "info",
  "message": "Request Log",
  "method": "GET",
  "url": "http://localhost:3000/users?id=123&name=JohnDoe",
  "headers": {
    "host": "localhost:3000",
    "connection": "keep-alive",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9",
    "cookie": "sessionId=abc123; userId=456"
  },
  "query": {
    "id": "123",
    "name": "JohnDoe"
  },
  "body": {},
  "cookies": {
    "sessionId": "abc123",
    "userId": "456"
  },
  "ip": "::1",
  "protocol": "http",
  "hostname": "localhost",
  "originalUrl": "/users?id=123&name=JohnDoe",
  "params": {},
  "secure": false,
  "subdomains": [],
  "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
  "customHeaders": {
    "X-Request-ID": "abc123456",
    "X-Auth-Token": "Bearer [REDACTED]"
  },
  "cacheHeaders": {
    "Cache-Control": "no-cache",
    "If-None-Match": "W/\"123abc\"",
    "If-Modified-Since": "Mon, 05 Jul 2024 07:28:00 GMT"
  },
  "referrer": "http://example.com",
  "origin": "http://example.com",
  "sessionId": "s12345",
  "sessionData": {
    "user": {
      "id": "u123",
      "name": "John Doe"
    }
  },
  "userAgentDetails": {
    "browser": "Chrome",
    "os": "Windows 10",
    "device": "Desktop"
  },
  "geoLocation": {
    "country": "US",
    "region": "CA",
    "city": "San Francisco"
  },
  "timestamp": "2024-09-03T12:34:56.789Z"
}
```