describe('Learning WebdriverIO API', () => {
    
    it('should take screenshot', async () => {
        const FORM_ICON = '~Forms';
        const SWITCH_BTN = '~switch';


        await $(FORM_ICON).click();

        await browser.saveScreenshot("./screenshots/API_learning_saveScreenshot.png");

        await $(SWITCH_BTN).saveScreenshot("./screenshots/SwitchButton_saveScreenshot.png");

        await browser.pause(3000);


    });
});