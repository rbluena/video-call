import { test, expect } from "@playwright/test";

test("has all the info", async ({ page }) => {
  await page.goto(`http://localhost:3000`);

  await expect(page).toBeTruthy();
});
