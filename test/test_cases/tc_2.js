// extra libraries
const webdriverio = require('webdriverio');
const assert = require('assert');
const chai = require('chai');

//page objects
const Base = require('./POM/base.js');
const Services = require('./POM/services.js');

const base = new Base();
const services = new Services();

//general
base.fileName = 'tc_2';
base.count = 1;

// let profile = wd.FirefoxProfile();

describe('Verify Change Address modal updates zip code (positive):', function() {

    // Start on Services page
    it('Change zip code', function(){
        base.open('/services');
        browser.waitUntil(function() {
            return browser.getUrl() === services.servicesURL 
        }, 1000, '/services page did not load (yet)');
        browser.click(services.changeLoc);
        //no new page is created, so using element on modal as reference that modal has appeared
        chai.assert.exists(services.street, 'Edit address modal successfully appeared');
    });

    // edit address
    it('Enter new correct address', function(){
        browser.waitForVisible(services.checkAvailability, 1000);
        // mocha doesn't include tool for 'dataprovider'
        browser.setValue(services.street, '1101 Red Ventures Dr');
        browser.setValue(services.city, 'Fort Mill');
        browser.selectByValue(services.state, 'SC');
        browser.setValue(services.zip, '29707');
        browser.click(services.checkAvailability);
        // waits for next page in flow - /plans-pricing
        browser.waitUntil(function() {
            return browser.getUrl() === services.servicesUpdatedURL
        }, 30000, 'Check Availability did not finish checking address');
        chai.assert.equal(browser.getText(services.updatedZip), 'Showing prices for 29707.\nChange Location ›', 'New zip code not updated properly');
        base.screenShot();
    });

});