describe('Learning WebdriverIO API', () => {
    
    it('should input username and passwork OK', async () => {
        const FORM_ICON = '~Forms';
        const INPUT_TXT = '~text-input';
        const INPUT_TXT_DISPLAYED = '~input-text-result';

        await $(FORM_ICON).click();

        await $(INPUT_TXT).setValue('abc');

        let displayText = await $(INPUT_TXT_DISPLAYED).getText();

        console.log('Input Text', displayText);

        await browser.pause(2000);


    });
});