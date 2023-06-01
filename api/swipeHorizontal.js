describe('Learning WebdriverIO API', () => {
    
    it('should swipe horizontally', async () => {
        const SWIPE_ICON = '~Swipe';
        const SWIPE_HEADER = '~Swipe-screen';

        await $(SWIPE_ICON).click();
        // await $(SWIPE_HEADER).click();

        const {height, width} = await driver.getWindowSize();
        const anchorPercentage = 50
        const startPointPercentage = 80
        const endPointPercentage = 20

        const anchor = await height * anchorPercentage / 100;
        const startPoint = await width * startPointPercentage / 100;
        const endPoint = await width * endPointPercentage / 100;


        for (let swipeTime = 0; swipeTime < 5; swipeTime++) {
            await driver.touchPerform([
                {
                    action: 'press',
                    options: {
                        x: startPoint,
                        y: anchor,
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
                        x: endPoint,
                        y: anchor
                    }
                },
                {
                    action: 'release',
                    options: {},
                }
            ])
        }
    });
});