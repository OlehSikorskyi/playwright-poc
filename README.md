# Playwright POC Test Automation Framework
This framework leverages Playwright, a Node.js library for automating web browsers, to create end-to-end tests for web applications. It utilizes the power of TypeScript to provide type safety, better code organization, and enhanced readability.

## Prerequisites
Before getting started, ensure you have the following prerequisites:

- [Node.js](https://nodejs.org/en) installed (v14 or newer recommended)
- [Git](https://git-scm.com/downloads) installed

## Configuration
1. Clone or fork this repository to your local machine:
`git clone https://github.com/OlehSikorskyi/playwright-poc.git`

2. Run the following command to install project dependencies:
`npm install`

3. Open the [playwright.config.ts](playwright.config.ts) file in the src directory and adjust the configuration settings as needed. This is where you can set base URLs, timeouts, or any other global settings for your tests.

4. Add `.env` file to the project root. You can use `example.env` file to obtain all required variables.

## Getting Started
To start creating and running tests with this framework:

- Write your test scripts in the tests directory using the Playwright API. You can create new test files or modify the existing ones.

- Run your tests using the following command:
`npm run test:<suite_name>`
This will execute all test files related to the tests suite.

## CI/CD Integration
This framework is well-suited for Continuous Integration and Continuous Deployment (CI/CD) pipelines. You can integrate it with services like GitHub Actions, Travis CI, or Jenkins to automate test execution whenever changes are pushed to your repository.

## Additional Resources
[Playwright Documentation](https://playwright.dev/) <br>
[TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Contributing
If you find any issues or want to contribute to this project, feel free to submit a pull request. Contributions are welcome!