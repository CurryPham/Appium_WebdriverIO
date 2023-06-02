let LoginFlow = require('../../test_flows/account/LoginFlow')
let {loginData} = require('../../test_data/account/TC_01_Login')
let allureReporter = require('@wdio/allure-reporter')

describe(`Account Function`, function () {

    it('should login successfully', async () => {
        allureReporter.addTestId("TC_001")
        allureReporter.addSeverity("critical")
        const{email, password} = loginData.VALID_CREDS
        const loginFlow = new LoginFlow(email, password)
        const LOGIN_ICON = '~Login'
        await $(LOGIN_ICON).click()


        await loginFlow.login_with_credentials()
        await loginFlow.verify_login_success()
        
        await browser.pause(1000)
    });

    // it('Login unsuccessfully', async () => {
        allureReporter.addTestId("TC_002")
        allureReporter.addSeverity("normal")
    //     const {email, password} = loginData.INVALID_CREDS
    //     const loginFlow = new LoginFlow(email, password)
    //     await loginFlow.login_with_credentials()
    //     await loginFlow.verify_login_unsuccessfully()
    // });
});