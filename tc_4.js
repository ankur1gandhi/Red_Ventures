// extra addins
let webdriverio = require('webdriverio');
let assert = require('assert');
let chai = require('chai');

//global variables
let countdown = '#countdown';
describe('Verify mouse hover over Services changes color:', function() {
    it(' black to red', function() {
        browser.url('');
        browser.windowHandleMaximize();
        let element = browser.getText(countdown);
        console.log(countdown);
        browser.pause(1000);
        chai.assert.equal(browser.getText(countdown), element - 1, "We're open countdown function timed incorrectly")
        assert(true);
        browser.saveScreenshot('./screenshots/tc_4.png')
    })
})