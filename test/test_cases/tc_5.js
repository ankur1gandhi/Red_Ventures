// extra addins
const webdriverio = require('webdriverio');
const assert = require('assert');
const chai = require('chai');

//page objects
const Base = require('./POM/base.js');
const HomePage = require('./POM/homePage.js');

const base = new Base();
const homePage = new HomePage();

//global variables
base.fileName = 'tc_5';
base.count = 1;

describe('Verify Plans & Pricing menu:', function() {

    it('Plans & Pricing title', function() {
        base.open('');
        chai.assert.equal(browser.getText(homePage.plansPricing), 'Plans & Pricing', 'Error within Plans & Pricing menu title');
    });

    //menu option 1 of 4 - All Plans
    it('Plans & Pricing drop down option - All Plans', function(){
        browser.moveToObject(homePage.plansPricing);
        chai.assert.equal(browser.getText(homePage.allPlans), 'All Plans', 'All Plans menu option incorrect');
        // screenshot only saved once because it will show ALL menu options
        base.screenShot();
    });

    //menu option 2 of 4 - Bundles
    it('Plans & Pricing drop down option - Bundles', function() {
        chai.assert.equal(browser.getText(homePage.bundles), 'Bundles', 'Bundles menu option incorrect');
    });

    //menu option 3 of 4 - Frontier FiOS Bundles
    it('Plans & Pricing drop down option - Frontier FiOS Bundles', function() {
        chai.assert.equal(browser.getText(homePage.frontierFiOSBundles), 'Frontier FiOS Bundles', 'Frontier FIOS Bundle menu option incorrect');
    });

    //menu option 4 of 4 - Frontier Secure
    it('Plans & Pricing drop down option - Frontier Secure', function() {
        chai.assert.equal(browser.getText(homePage.frontierSecure), 'Frontier Secure', 'All Plans menu option incorrect');
    });
});