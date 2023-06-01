exports.config = {
    runner: 'local',
    port: 4723,
    host: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        // require: ['@babel/register'],
        timeout: 600000
    },
    maxInstances: 1,
    specs: [
        './api/switch.js'
    ],
    capabilities: [{
        "platformName": "Android",
        "automationName": "UiAutomator2",
        "udio": "emulator-5554",
        "appPackage": "com.wdiodemoapp",
        "appActivity": "MainActivity"
    }]
}