describe('Learning WebdriverIO API', () => {
    
    it('should click on Login Icon successfully', async () => {
        const LOGIN_ICON = '~Login';
        const SWITCH_BTN = '~switch';

        await $(LOGIN_ICON).click();

        await $(SWITCH_BTN).waitForDisplayed({ timeout: 6000 });

        await $(SWITCH_BTN).click();

        await browser.pause(3000);


    });
});