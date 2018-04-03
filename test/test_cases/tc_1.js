// extra libraries
const webdriverio = require('webdriverio');
const assert = require('assert');
const chai = require('chai');

//page objects
const Base = require('./POM/base.js');
const HomePage = require('./POM/homePage.js');
const Services = require('./POM/services.js');
const CartAddress = require('./POM/cart_address');

const base = new Base();
const homePage = new HomePage();
const services = new Services();
const cartAddress = new CartAddress();

//general
base.fileName = 'tc_1';
base.count = 1;
let bool = false;

// let profile = wd.FirefoxProfile();

describe('Verify shop internet flow (until /cart/address):', function() {
    
    // starts on Home Page
    it('Home Page', function() {
        base.open('/');
        browser.click(homePage.shopInternet);
        chai.assert.exists(services.changeLoc, 'Shop Intenet button successfully navigated to correct page');
        base.screenShot();
    });

    // Should open modal for ordering online 
    it('Select Simply Internet Ultra plan', function() {
        browser.click(services.selectPlanSimply);
        chai.assert.exists(services.orderOnlineButton, 'Modal for opening online did not appear');
        // wait for modal animation to finish to get proper screenshot
        browser.pause(500);
        base.screenShot();
    });

    // Continue Order Online flow
    it('Click now to order', function() {
        // base.timeouts('pageLoad');
        browser.waitForVisible(services.orderOnlineButton);
        browser.click(services.orderOnlineButton);
        bool = browser.waitUntil(function() {
            return browser.getUrl() === cartAddress.cartAddressURL 
        }, 5000, '/cart/address page did not load (yet)');
        assert(bool, '/cart/address URL not loaded');
        base.screenShot();
    });

});
