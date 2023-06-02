let Login = require('../../pageobjects/account/Login')

class LoginFlow {

    async login_with_credentials(email, password){
        await Login.email_txt_filed.setValue(email)
        await Login.password_txt_filed.setValue(password)
        await Login.login_btn.click()
    }

    async verify_login(email) {
        await expect(Login.email_txt_filed).toHaveText(email)
    }
} 

module.exports = LoginFlow