let LoginPage = require('../../pageobjects/account/Login');

describe('Account', () => {
    
    it('should raise an error', async () => {
        const LOGIN_ICON = '~Login'
        await $(LOGIN_ICON).click()

        await LoginPage.login("test", "123456")

        await browser.pause(2000)
    });
});