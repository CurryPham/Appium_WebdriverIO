let Login = require('../../page_objects/account/Login')
let NavBar = require('../../page_objects/common/NavBar')
let loginMessagePopup = require('../../page_objects/account/LoginMessagePopup')

class LoginFlow {

    // constructor(email, password) {
    //     this.email = email
    //     this.password = password
    // }

    async login_with_credentials(email, password) {
        await NavBar.login_icon.click()
        await Login.email_txt_filed.setValue(email)
        await Login.password_txt_filed.setValue(password)
        await Login.click_on_login_btn()
    }

    async verify_login_success() {
        const expected_msg_title = "Success"
        const expected_msg_content = "You are logged in!"

        await expect(loginMessagePopup.msg_title).toHaveText(expected_msg_title)
        await expect(loginMessagePopup.msg_content).toHaveText(expected_msg_content)
        await loginMessagePopup.accept_btn.click()

    }
}

module.exports = LoginFlow