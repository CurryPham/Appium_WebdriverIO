let CredentialForm = require('./CredentialForm')

const LOGIN_BTN = '~button-LOGIN'

class Login extends CredentialForm{

    get login_btn() {
        return $(LOGIN_BTN)
    }


    async clickBtn() {
        await this.login_btn.click();
    }

    async login(username, password) {
        await this.email_txt_filed.setValue(username);
        await this.password_txt_filed.setValue(password);
        await super.login_btn.click();
    }


}

module.exports = new Login();