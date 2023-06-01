let LoginFlow = require('../../test_flows/account/LoginFlow')

let LoginPage = require('../../pageobjects/account/Login');

describe('Account', () => {
    
    it('should use inherited PO', async () => {
        let email = 'test'
        let password = '123456'

        let loginFlow = new LoginFlow()

        const LOGIN_ICON = '~Login'
        await $(LOGIN_ICON).click()

        await loginFlow.login_with_credentials(email, password)
        await loginFlow.verify_login(email)
        
        await browser.pause(3000)
    });
});