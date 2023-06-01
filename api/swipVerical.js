describe('Learning WebdriverIO API', () => {
    
    it('should click on Login Icon successfully', async () => {
        const FORM_ICON = '~Forms';
        const ACTIVE_BUTTON = '~button-Active';
        const FORM_HEADER = '~Forms-screen';

        await $(FORM_ICON).click();

        const {height} = await driver.getWindowSize();
        const anchorPercentage = 50
        const startPointPercentage = 90
        const endPointPercentage = 10

        const anchor = await height * anchorPercentage / 100;
        const startPoint = await height * startPointPercentage / 100;
        const endPoint = await height * endPointPercentage / 100;

        await  $(FORM_HEADER).click();

        await driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: anchor,
                    y: startPoint,
                }
            },
            {
                action: 'wait',
                options: {
                    ms: 1000
                }
            },
            {
                action: 'moveTo',
                options: {
                    x: anchor,
                    y: endPoint,
                }
            },
            {
                action: 'release',
                options: {},
            }
        ])


        await $(ACTIVE_BUTTON).click();
    });
});