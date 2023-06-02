let LoginFlow = require('../../test_flows/account/LoginFlow')
let {loginData} = require('../../test_data/account/TC_01_Login')

describe(`Account Function`, function () {

    it('should login successfully', async () => {
        const loginFlow = new LoginFlow()
        const LOGIN_ICON = '~Login'
        await $(LOGIN_ICON).click()

        const{email, password} = loginData.VALID_CREDS

        await loginFlow.login_with_credentials(email, password)
        await loginFlow.verify_login_success()
        
        await browser.pause(1000)
    });
});