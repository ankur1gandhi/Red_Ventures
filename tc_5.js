// extra addins
let webdriverio = require('webdriverio');
let assert = require('assert');
let chai = require('chai');

//global variables
let menuTitle = '#menu-item-4313';
let allPlans = '#menu-item-5108 > a:nth-child(1)';
let bundles = '#menu-item-4321 > a:nth-child(1)';
let frontierFiOSBundles = '#menu-item-5159 > a:nth-child(1)';
let frontierSecure = '#menu-item-4367 > a:nth-child(1)';

//should this be done for every header option?
describe('Verify Plans & Pricing menu and options:', function() {

    it('Plans & Pricing title', function() {
        browser.url('');
        browser.windowHandleMaximize();
        chai.assert.equal(browser.getText(menuTitle), 'Plans & Pricing', 'Error within Plans & Pricing menu title');
        browser.saveScreenshot('./screenshots/tc_5_one.png')
    })

    //menu option 1 of 4 - All Plans
    it('Plans & Pricing drop down option - All Plans', function(){
        browser.moveToObject(menuTitle);
        browser.pause(1000);
        chai.assert.equal(browser.getText(allPlans), 'All Plans', 'All Plans menu option incorrect');
        browser.saveScreenshot('./screenshots/tc_5.png');
        // screenshot only saved once because it will show ALL menu options
    })

    //menu option 2 of 4 - Bundles
    it('Plans & Pricing drop down option - Bundles', function() {
        chai.assert.equal(browser.getText(bundles), 'Bundles', 'Bundles menu option incorrect');
    })

    //menu option 3 of 4 - Frontier FiOS Bundles
    it('Plans & Pricing drop down option - Frontier FiOS Bundles', function() {
        chai.assert.equal(browser.getText(frontierFiOSBundles), 'Frontier FiOS Bundles', 'Frontier FIOS Bundle menu option incorrect');
    })

    //menu option 4 of 4 - Frontier Secure
    it('Plans & Pricing drop down option - Frontier Secure', function() {
        chai.assert.equal(browser.getText(frontierSecure), 'Frontier Secure', 'All Plans menu option incorrect');
    })
})