import { test, expect } from "@playwright/test";

test("Homepage should load correctly", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/"Vite + React + TS"/i);
});