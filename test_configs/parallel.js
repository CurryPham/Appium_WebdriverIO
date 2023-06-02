const {config} = require('./main')

config.capabilities = [
    {
    "platformName": "Android",
    "automationName": "UiAutomator2",
    "udio": "emulator-5554",
    "appPackage": "com.wdiodemoapp",
    "appActivity": "MainActivity",
    "systemPort": 6001,
    port: 6000,
    deviceName: "pixel_2"
},
    {
    "platformName": "Android",
    "automationName": "UiAutomator2",
    "udio": "emulator-5556",
    "appPackage": "com.wdiodemoapp",
    "appActivity": "MainActivity",
    "systemPort": 7001,
    port: 7000,
    deviceName: "pixel_5"
}
]

exports.config = config
