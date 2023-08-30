import {test} from "@playwright/test";

export function Step(message: string) {
    return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
        async function replacementMethod(this: any, ...args: any[]) {
            await test.step(`Step: ${message}`, async () => {
                return originalMethod.call(this, ...args);
            });
        }
        return replacementMethod;
    }
}