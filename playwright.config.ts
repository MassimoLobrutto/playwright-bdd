import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'src/features/**/*.feature',
  // ✅ FIX: Tell BDD to ignore the setup file so it doesn't try to parse it as steps
  steps: ['src/steps/**/*.ts', '!src/steps/auth.setup.ts'],
  importTestFrom: 'src/fixtures/fixtures.ts',
  disableWarnings: {
    importTestFrom: true,
  },
});

export default defineConfig({
  // ✅ Ensure this path is 100% correct relative to this config file
  globalSetup: require.resolve('./src/steps/auth.setup.ts'),
  testDir,
  fullyParallel: true,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 4 : 3,

  reporter: [
    cucumberReporter('html', {
      outputFile: 'cucumber-report/index.html',
      externalAttachments: true,
    }),
    ['html', { open: 'never' }],
  ],
  use: {
    baseURL: 'https://jsonplaceholder.typicode.com',
    screenshot: process.env.CI ? 'only-on-failure' : 'off',
    trace: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        storageState: path.resolve(__dirname, 'playwright/.auth/sauce_user.json'),
      },
      testMatch: /.*\.feature/,
    },
  ],
});
