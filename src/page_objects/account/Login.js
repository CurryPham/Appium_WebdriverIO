let CredentialForm = require('./CredentialForm');

const LOGIN_BTN = '~button-LOGIN'
const INVALID_EMAIL_TXT = '//*[@text="Please enter a valid email address"]'
const INVALID_PASSWORD_TXT = '//*[@text="Please enter at least 8 characters"]'

class Login extends CredentialForm {

    async wait_till_screen_displayed() {
        await $(LOGIN_BTN).waitForDisplayed();
    }

    async click_on_login_btn() {
        await $(LOGIN_BTN).click();
    }

    async is_invalid_email_format_msg_displayed(){
        await $(INVALID_EMAIL_TXT).waitForDisplayed()
        return await $(INVALID_EMAIL_TXT).isDisplayed()
    }

    async is_invalid_password_format_msg_displayed(){
        await $(INVALID_PASSWORD_TXT).waitForDisplayed()
        return await $(INVALID_PASSWORD_TXT).isDisplayed()
    }
    
}

module.exports = new Login()