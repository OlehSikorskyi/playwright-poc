import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    globalSetup: require.resolve('./scripts/setupEnvironment'),
    testDir: './tests',
    fullyParallel: true,
    workers: process.env.CI ? 1 : undefined,
    reporter: [
        process.env.CI ? ['./helpers/reporter/CustomReporter.ts'] : ['html', { open: 'always'}]],
    use: {
        trace: 'on-first-retry',
        headless: false
    },
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        },
        // {
        //     name: 'firefox',
        //     use: {...devices['Desktop Firefox']},
        // }
    ],
});
