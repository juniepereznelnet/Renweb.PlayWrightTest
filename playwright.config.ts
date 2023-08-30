import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/windows.test.ts"],
  use: {
    headless: false,
    screenshot: "on", //only-on-failure
    video: "on", //retain-on-failure
    launchOptions: {
      slowMo: 1000
    }
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "jsonReports/jsonReport.json"
  }], ["html", {
    open: "always"
  }]],
};

export default config;