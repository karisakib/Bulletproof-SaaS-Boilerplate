import request from "supertest";
import app from "../src/server"; // Adjust if your Express app is exported differently

describe("Security Tests", () => {
  /**
   * Test for Rate Limiting
   * Ensures that excessive requests from a single IP get blocked
   */
  it("should enforce rate limiting", async () => {
    const endpoint = "/api/v1/protected"; // Change to an actual endpoint
    const numRequests = 20; // Assuming rate limit is 10 requests per minute

    let response;
    for (let i = 0; i < numRequests; i++) {
      response = await request(app).get(endpoint);
    }

    expect(response.status).toBe(429); // Too Many Requests
  });

  /**
   * Test for CORS Security Headers
   * Ensures that CORS is properly configured
   */
  it("should prevent unauthorized CORS requests", async () => {
    const response = await request(app)
      .get("/api/v1/public") // Public endpoint
      .set("Origin", "https://malicious-site.com");

    expect(response.status).not.toBe(200); // Should block unknown origins
    expect(response.headers["access-control-allow-origin"]).toBeUndefined();
  });

  /**
   * Test for SQL Injection Protection
   * Ensures that special SQL characters in input don’t break the DB
   */
  it("should prevent SQL Injection attacks", async () => {
    const response = await request(app)
      .post("/api/v1/login") // Assuming login endpoint
      .send({
        email: "' OR 1=1 --", // Typical SQL Injection payload
        password: "password"
      });

    expect(response.status).toBe(401); // Unauthorized, should not bypass authentication
  });

  /**
   * Test for XSS Protection
   * Ensures that HTML/JS is not reflected back unsanitized
   */
  it("should sanitize inputs to prevent XSS", async () => {
    const response = await request(app)
      .post("/api/v1/feedback")
      .send({ comment: `<script>alert('XSS')</script>` });

    expect(response.status).toBe(400); // Should reject malicious input
    expect(response.body.comment).not.toContain("<script>"); // Should be sanitized
  });

  /**
   * Test for Unauthorized API Access
   * Ensures that protected routes require authentication
   */
  it("should require authentication for protected routes", async () => {
    const response = await request(app).get("/api/v1/protected");

    expect(response.status).toBe(401); // Unauthorized
  });

  /**
   * Test for Secure Headers
   * Ensures that security-related HTTP headers are present
   */
  it("should include security headers", async () => {
    const response = await request(app).get("/api/v1/public");

    expect(response.headers["x-content-type-options"]).toBe("nosniff");
    expect(response.headers["x-frame-options"]).toBe("DENY");
    expect(response.headers["content-security-policy"]).toBeDefined();
  });
});
