describe('Learning WebdriverIO API', () => {
    
    it('should click on Login Icon successfully', async () => {
        const LOGIN_ICON = '~Login';

        await $(LOGIN_ICON).click();
        await browser.pause(3000);


    });
});