let LoginFlow = require('../../test_flows/account/LoginFlow')
// let testData = require ('../../test_data/account/TC06')
let {loginData} = require ('../../test_data/account/TC06')

describe('Account', () => {
    
    it('should use inherited PO', async () => {

        let loginFlow = new LoginFlow()

        const LOGIN_ICON = '~Login'
        await $(LOGIN_ICON).click()

        // const {INVALID_CRED} = testData.loginData
        // const {email, password} = INVALID_CRED

        // const {INVALID_CRED} = loginData
        const {email, password} = loginData.VALID_CRED

        // const {email, password} = loginData

        await loginFlow.login_with_credentials(email, password)
        await loginFlow.verify_login(email)

        await browser.pause(3000)
    });
});