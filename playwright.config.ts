import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'src/features/**/*.feature',
  // ✅ FIX: Tell BDD to ignore the setup file so it doesn't try to parse it as steps
  steps: ['src/specs/**/*.ts', '!src/specs/auth.setup.ts'],
  importTestFrom: 'src/fixtures/fixtures.ts',
  disableWarnings: {
    importTestFrom: true,
  },
});

export default defineConfig({
  // ✅ Ensure this path is 100% correct relative to this config file
  globalSetup: require.resolve('./src/specs/auth.setup.ts'),
  testDir,
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : 4,

  reporter: [
    cucumberReporter('html', {
      outputFile: 'cucumber-report/index.html',
      externalAttachments: true,
    }),
    ['html', { open: 'never' }],
  ],
  use: {
    screenshot: 'only-on-failure',
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
