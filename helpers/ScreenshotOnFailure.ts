import type { Page, TestInfo } from "@playwright/test";
import { ScenarioAttributes } from "../framework/core/ScenarioAttributes";

export async function screenshotOnFailure(page: Page, testInfo: TestInfo) {
    if(testInfo.status !== testInfo.expectedStatus) {
        const screenshotName: string = `${testInfo.annotations.find(annotation => annotation.type === ScenarioAttributes.TesCaseId).description}.png`;
        const screenshotPath: string = `${testInfo.config.projects[0].outputDir}\\${screenshotName}`;
        testInfo.attachments.push({name: screenshotName, path: screenshotPath, contentType: `image/png`});
        await page.screenshot({path: screenshotPath, fullPage: true, timeout: 5000});
    }
}