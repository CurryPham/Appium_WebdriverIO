describe('Learning WebdriverIO API', () => {
    
    it('should input username and passwork OK', async () => {
        const LOGIN_ICON = '~Login';
        const EMAIL_TXT = '~input-email';
        const PASS_TXT = '~input-password';
        const LOGIN_BTN = '~button-LOGIN';

        await $(LOGIN_ICON).click();

        await $(EMAIL_TXT).setValue('a@a.com');
        await $(PASS_TXT).setValue('12345678');

        await $(LOGIN_BTN).click();
        await browser.pause(2000);


    });
});