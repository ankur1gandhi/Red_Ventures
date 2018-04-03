// extra addins
const webdriverio = require('webdriverio');
const assert = require('assert');
const chai = require('chai');

//page objects
const Base = require('./POM/base.js');
const CartAddress = require('./POM/cart_address');

const base = new Base();
const cartAddress = new CartAddress();

//global variables
base.fileName = 'tc_7';
base.count = 1;

describe("Verify error messages for blank input fields", function() {
    
    // Start off on /cart/address page and fill out wrong address
    it('fill out address with wrong zip code', function() {
        base.open('/cart/address');
        // wait for page load
        browser.waitForExist(cartAddress.address, 2000);
        // click through all text fields to start input validation
        browser.click(cartAddress.address);
        browser.click(cartAddress.city);
        browser.click(cartAddress.state);
        browser.click(cartAddress.zip);
        // need to click elsewhere so zip code field is also validated
        browser.click(cartAddress.address);
        assert(!browser.isEnabled(cartAddress.continue), '/cart/unserviceable page has not loaded after 1minute wait time');
        base.screenShot();
    });

});