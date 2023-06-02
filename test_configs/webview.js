const {config} = require('./main')

config.capabilities = [{
    "platformName": "Android",
    "automationName": "UiAutomator2",
    "udio": "emulator-5554",
    "appPackage": "com.wdiodemoapp",
    "appActivity": "MainActivity"
}]

config.specs = [
    '../src/test_script/webview/TC_003_Webview.js'
]

exports.config = config