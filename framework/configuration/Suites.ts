export enum Suites {
    Login = 'login',
    Inventory = 'inventory',
    GoRestService = 'goRestService',
    Visual = 'visual',
    Regression = 'regression',
    Smoke = 'smoke'
}

const suitePrefix = '@suite:';

function withPrefix(prefix: string, suites: typeof Suites) {
    const suiteWithPrefix: Record<string, string> = {};
    for (const key in suites) {
        if (Object.prototype.hasOwnProperty.call(suites, key)) {
            suiteWithPrefix[key] = `${prefix}${suites[key]}`;
        }
    }
    return suiteWithPrefix as Record<keyof typeof suites, string>;
}

export const Suite = withPrefix(suitePrefix, Suites);

