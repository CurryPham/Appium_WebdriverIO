let chai = require('chai');

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
    waitforTimeout: 10000,
    maxInstances: 1,
    specs: [
        'src/test_script/account/TC_05.js',
        
    ],
    capabilities: [{
        "platformName": "Android",
        "automationName": "UiAutomator2",
        "udio": "emulator-5554",
        "appPackage": "com.wdiodemoapp",
        "appActivity": "MainActivity"
    }],

    before: function() {
        global.chaiExpect = chai.expect
    }
}