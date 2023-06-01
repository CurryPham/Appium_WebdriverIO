let LoginPage = require('../../pageobjects/account/Login');

describe('Account', () => {
    
    it('should raise an error', async () => {
        const LOGIN_ICON = '~Login'
        await $(LOGIN_ICON).click()

        await LoginPage.waitForDisplayed()
        await LoginPage.email_txt_filed.setValue("test")
        await LoginPage.password_txt_filed.setValue("123456")
        await LoginPage.login_btn.click()

        await browser.pause(2000)
    })
});