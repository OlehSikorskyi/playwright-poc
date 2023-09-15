export default {
    baseUrl: `https://www.saucedemo.com/`,
    services: [
        {
            name: `goRest`,
            url: 'https://gorest.co.in/public/',
            version: 'v2'
        }
    ],
    standardUser: {
        type: 'standard_user',
        email: ``,
        password: ``
    },
    lockedOutUser: {
        type: 'locked_out_user',
        email: ``,
        password: ``
    },
    gitHubUser: {
        type: 'github_user',
        email: ``,
        password: ``,
        token: ``
    }
}