// extra addins
const webdriverio = require('webdriverio');
const assert = require('assert');
const chai = require('chai');

//page objects
const Base = require('./POM/base.js');
const Services = require('./POM/services.js');

const base = new Base();
const services = new Services();

//global variables
base.fileName = 'tc_3';
base.count = 1;

describe('Verify Change Address modal updates zip code (negative):', function() {

    // Start on Services page
    it('Change zip code', function(){
        base.open('/services');
        browser.waitUntil(function() {
            return browser.getUrl() === services.servicesURL 
        }, 1000, '/services page did not load (yet)');
        browser.click(services.changeLoc);
        //no new page is created, so using element on modal as reference that modal has appeared
        chai.assert.exists(services.street, 'Edit address modal successfully appeared');
        // wait for modal animation to finish to get proper screenshot
        browser.pause(500);
        base.screenShot();
    });

    // negative test case for change address
    it('Enter new address (negative)', function(){
        browser.waitForVisible(services.checkAvailability, 1000);
        browser.setValue(services.street, '24234234');
        browser.setValue(services.city, '24234234');
        browser.selectByValue(services.state, 'SC');
        browser.setValue(services.zip, '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890');
        browser.click(services.checkAvailability);
        // waits for next page in flow - /plans-pricing
        browser.waitUntil(function() {
            return browser.getUrl() === services.servicesUpdatedURL
        }, 30000, 'Check Availability did not finish checking address');
        chai.assert.equal(browser.getText(services.updatedZip), 
        'Showing prices for 12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890.\nChange Location ›', 'New zip code not updated properly');
        base.screenShot();
    });

});