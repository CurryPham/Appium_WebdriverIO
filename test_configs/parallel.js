const {config} = require('./main')

config.capabilities = [
    {
    "platformName": "Android",
    "automationName": "UiAutomator2",
    "udio": "emulator-5554",
    "appPackage": "com.wdiodemoapp",
    "appActivity": "MainActivity",
    port: 4723,
    deviceName: "pixel_2"
},
    {
    "platformName": "Android",
    "automationName": "UiAutomator2",
    "udio": "emulator-5556",
    "appPackage": "com.wdiodemoapp",
    "appActivity": "MainActivity",
    port: 4001,
    deviceName: "pixel_5"
}
]

exports.config = config
