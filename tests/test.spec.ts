import { test, expect } from "@playwright/test";
import { Login } from "../pages/login";
import data from "../data/data.json";

test("Verify user can successfully log into SAM GUARD", async ({ page }) => {
  const loginPage = new Login(page);
  await loginPage.openLoginPage();
  await loginPage.login(
    process.env.STAGING_EMAIL || "",
    process.env.STAGING_PASSWORD || "",
  );
  await expect(page).toHaveURL(/reporting/);
});
