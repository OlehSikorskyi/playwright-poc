import{FullConfig, FullResult, Reporter, Suite, TestCase, TestResult, TestStep} from '@playwright/test/reporter'
import { ScenarioAttributes } from '../../framework/core/ScenarioAttributes';
import { TestStatus } from './TestStatus';

class CustomReporter implements Reporter {

    /**
     * Called once before running tests. All tests have been already discovered and put into a hierarchy of Suites
     * 
     * @param config Resolved configuration.
     * @param suite The root suite that contains all projects, files and test cases.
     */
    async onBegin(config: FullConfig, suite: Suite) {
        console.log(`ON BEGIN: Createed test run`);
    }

    /**
     * Called after all tests has been run, or testing has been interrupted. Note that this method may return a [Promise] 
     * and Playwright Test will await it.
     * @param result Result of the full test run.
    */
    async onEnd(result: FullResult) {
        console.log(`ON END: Test suite ${result.status}`);
    }    

    /**
     * Called after a test has been started in the worker process.
     * 
     * @param test Test that has been started.
     * @param result Result of the test run, this object gets populated while the test runs.
     */
    async onTestBegin(test: TestCase, result: TestResult) {
        console.log(`ON TEST BEGIN: Test Started: '${test.title}'`);
    }

    /**
     * Called after a test has been finished in the worker process.
     * @param test Test that has been finished.
     * @param result Result of the test run.
     */
    async onTestEnd(test: TestCase, result: TestResult) {
        const testId = test.annotations.find(annotation => annotation.type === ScenarioAttributes.TesCaseId).description;
        if (result.status === TestStatus.Failed) {
            const screenshot = result.attachments.find(attachment => attachment.name = `${testId}.png`).name;
            const bugId = test.annotations.find(annotation => annotation.type === ScenarioAttributes.Defects).description;
            console.log(`ON TEST END: Test failed. Update test run with the result. Mark test [${testId}] as FAILED`);
            console.log(`             Attaching screenshot to failed case: [${screenshot}]`);
            console.log(`             Linking BugID to failed case: [${bugId}]`);
        } else {
            console.log(`ON TEST END: Test passed. Update test run with the result. Mark test [${testId}] as PASSED`);
        }
    }

    /**
     * Called when a test step started in the worker process.
     * @param test Test that the step belongs to.
     * @param result Result of the test run, this object gets populated while the test runs.
     * @param step Test step instance that has started.
     */
    async onStepBegin(test: TestCase, result: TestResult, step: TestStep) {

  }

    /**
     * Called when a test step finished in the worker process.
     * @param test Test that the step belongs to.
     * @param result Result of the test run.
     * @param step Test step instance that has finished.
     */
    async onStepEnd(test: TestCase, result: TestResult, step: TestStep) {

    }
}

export default CustomReporter;