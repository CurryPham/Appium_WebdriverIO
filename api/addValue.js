describe('Learning WebdriverIO API', () => {
    
    it('should input username and passwork OK', async () => {
        const LOGIN_ICON = '~Login';
        const EMAIL_TXT = '~input-email';

        await $(LOGIN_ICON).click();

        let email_txt = await $(EMAIL_TXT)
        
        await email_txt.addValue('a@a.com');
        await email_txt.addValue('.com');

        await email_txt.setValue('new@a.com');

        await email_txt.clearValue();

        await browser.pause(2000);


    });
});