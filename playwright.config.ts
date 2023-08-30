import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    globalSetup: require.resolve('./scripts/setupEnvironment'),
    testDir: './tests',
    fullyParallel: true,
    workers: process.env.CI ? 1 : undefined,
    reporter: [['html', {open: 'always'}]],
    use: {
        trace: 'on-first-retry',
        headless: true
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
