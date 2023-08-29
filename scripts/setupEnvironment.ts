import * as dotenv from 'dotenv';
import {Environment} from "../framework/configuration/Environment";

export default function setupEnvironment() {
    dotenv.config();
    const env: string = process.env.npm_congig_env;
    if (env) {
        if (!Object.values(Environment).includes(env as Environment)) {
            throw new Error(`The requested environment '${env}' is not supported.
            Please check your configuration and ensure that you have specified a valid environment.
            The valid environments are: [${Object.values(Environment)}]`);
        }
        process.env.NODE_ENV = env;
    }
    console.log(`Running tests on [${process.env.NODE_ENV}] environment.`);
}
