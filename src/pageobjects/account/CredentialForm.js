const EMAIL_TXT_FIELD = '~input-email.'
const PASSWORD_TXT_FIELD = '~input-password'

class CredentialForm {
    

    get email_txt_filed() {
        return $(EMAIL_TXT_FIELD)
    }

    get password_txt_filed() {
        return $(PASSWORD_TXT_FIELD)
    }

    async waitForDisplayed() {
        await this.email_txt_filed.waitForDisplayed();
    }

    async inputUsername(username) {
        await this.email_txt_filed.setValue(username);
    }

    async inputPassword(password) {
        await this.password_txt_filed.setValue(password);
    }

    async login(username, password) {
        await this.email_txt_filed.setValue(username);
        await this.password_txt_filed.setValue(password);
        await this.login_btn.click();
    }


}

module.exports = CredentialForm;