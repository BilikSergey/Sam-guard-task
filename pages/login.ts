import { Page, Locator } from '@playwright/test';
import links from "../data/data.json";

export class Login {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[id="email"]').nth(1);
    this.passwordInput = page.locator('input[id="password"]').nth(1);
    this.loginButton = page.getByText('LOGIN').nth(1);
  }

  async openLoginPage() {
    await this.page.goto(links.login.stagingURL);
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}