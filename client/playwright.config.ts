import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 10000,
  use: {
   baseURL: "http://localhost:3000", // 👈 Ensure this matches your dev server
    // headless: true,
    viewport: { width: 1280, height: 720 },
    trace: "on",
  },
  // webServer: {
    // command: "npm run dev",
    // port: 5001,
    // reuseExistingServer: !process.env.CI,
  // },
});
