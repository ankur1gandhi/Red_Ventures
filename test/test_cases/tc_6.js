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
base.fileName = 'tc_6';
base.count = 1;

describe('Verify mouse click on header menu items does not trigger page navigation', function() {
       
    // opted for click as doubleClick is depricating
    it('from clicking Plans & Plans', function() {
        base.open('');
        browser.click(homePage.plansPricing);
        chai.assert.equal(browser.getUrl(), homePage.homeURLAfterElementClick, 'double clicking Plans & Pricing navigates user from home page');
        base.screenShot();
    });

    it('from clicking Internet', function() {
        browser.click(homePage.internet);
        chai.assert.equal(browser.getUrl(), homePage.homeURLAfterElementClick, 'double clicking Internet navigates user from home page');
        base.screenShot();
    });

    it('from clicking TV', function() {
        browser.click(homePage.tv);
        chai.assert.equal(browser.getUrl(), homePage.homeURLAfterElementClick, 'double clicking TV navigates user from home page');
        base.screenShot();
    });
});