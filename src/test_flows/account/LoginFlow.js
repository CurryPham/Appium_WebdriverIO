let Login = require('../../page_objects/account/Login')
let NavBar = require('../../page_objects/common/NavBar')
let loginMessagePopup = require('../../page_objects/account/LoginMessagePopup')
let allureReporter = require('@wdio/allure-reporter')

class LoginFlow {

    constructor(email, password) {
        this.email = email
        this.password = password
    }

    async login_with_credentials() {
        await NavBar.login_icon.click()
        allureReporter.addStep(`Input email as ${this.email}`)
        await Login.email_txt_filed.setValue(this.email)
        allureReporter.addStep(`Input password as ${this.password}`)
        await Login.password_txt_filed.setValue(this.password)
        allureReporter.addStep('Click on Login button')
        await Login.click_on_login_btn()
    }

    async verify_login_success() {
        const expected_msg_title = "Success"
        const expected_msg_content = "You are logged in!"

        await expect(loginMessagePopup.msg_title).toHaveText(expected_msg_title)
        await expect(loginMessagePopup.msg_content).toHaveText(expected_msg_content)
        await loginMessagePopup.accept_btn.click()

    }

    async verify_login_unsuccessfully() {
        if (!this.email && this.password.length >= 8) {
            await chaiExpect(Login.is_invalid_email_format_msg_displayed()).to.equal(true)
            await chaiExpect(Login.is_invalid_password_format_msg_displayed()).to.equal(false)
        } else if (this.email.length > 0 && this.password.length < 8) {
            await chaiExpect(Login.is_invalid_email_format_msg_displayed()).to.equal(false)
            await chaiExpect(Login.is_invalid_password_format_msg_displayed()).to.equal(true)
        } else{
            await chaiExpect(Login.is_invalid_email_format_msg_displayed()).to.equal(true)
            await chaiExpect(Login.is_invalid_password_format_msg_displayed()).to.equal(true)
        }
}
}

module.exports = LoginFlow