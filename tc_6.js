// extra addins
let webdriverio = require('webdriverio');
let assert = require('assert');
let chai = require('chai');

//global variables
let plansPricing = '#menu-item-4313';
let internet = '#menu-item-4314';
let tv = '#menu-item-4440'

describe('Verify mouse click on header menu items does not trigger page navigation', function() {
    
    //set up
    it('set up', function() {
        browser.url(''); //should these 2 lines by it's own unit case for 'set up'?
        browser.windowHandleMaximize();
    })
    
    it('from clicking Plans & Plans', function() {
        browser.doubleClick(plansPricing);
        //detect browser nagivation?
        browser.saveScreenshot('./screenshots/tc_6_1.png');
    })

    it('from clicking Internet', function() {
        browser.doubleClick(internet);
        //detect browser nagivation?
        browser.saveScreenshot('./screenshots/tc_6_2.png');
    })

    it('from clicking TV', function() {
        browser.doubleClick(tv);
        //detect browser nagivation?
        browser.saveScreenshot('./screenshots/tc_6_3.png');
    })
})