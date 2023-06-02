let NavBar = require("../../page_objects/common/NavBar");

describe(`Webview on ${browser.capabilities.deviceName}`, () => {

    const DOCS_LINK = '=Docs';

    it('should get all contexts', async () =>{
        await NavBar.webview_icon.click()
        let contexts = await driver.getContexts()
        await console.log("All contexts: ", contexts)
        await driver.switchContext("WEBVIEW_com.wdiodemoapp")
        await $(DOCS_LINK).waitForDisplayed({timeout:30000})
        await $(DOCS_LINK).click()
        await driver.switchContext("NATIVE_APP")
        await NavBar.login_icon.click()
    });
});