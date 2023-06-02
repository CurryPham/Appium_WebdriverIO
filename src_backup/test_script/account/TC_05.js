let LoginPage = require('../../pageobjects/account/Login');

describe('Account', () => {
    
    it('should use inherited PO', async () => {
        
        const LOGIN_ICON = '~Login'
        await $(LOGIN_ICON).click()

        await LoginPage.waitForDisplayed()
        await LoginPage.inputUsername('test')
        await LoginPage.inputPassword('123456')
        await LoginPage.valueEmail('test')

        await LoginPage.clickBtn()
        await browser.pause(3000)
    });
});