import { Scenario } from "../framework/core/Scenario";

export function Step(message: string) {
    return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
        async function replacementMethod(this: any, ...args: any[]) {
            await Scenario.step(`Step: ${message}`, async () => {
                return originalMethod.call(this, ...args);
            });
        }
        return replacementMethod;
    }
}