// extra addins
let webdriverio = require('webdriverio');
let assert = require('assert');
let chai = require('chai');

//global variables
//Home Page
let shopInternet = "#js-track-home-hero"
//Page 2
let changeLoc ='#js-track-hero-change-location';browser.waitForExist(changeLoc)
let selectPlanSimply = '#js-track-plans-pricing-button-1';
let updatedZip = "h3.headline-light";
//Page 2.change_address
let street = '#street';
let city = '#city';
let state = '#state';
let zip = '#zip';
let checkAvailability = '#js-track-form-full-check-availability';


describe('Shop internet flow (negative):', function() {
    this.timeout(30000);
    //starts on Home Page
    it('Home Page', function() {
        open();
        browser.click(shopInternet);
        chai.assert.exists(changeLoc, 'Shop Intenet button successfully navigated to correct page');
        //page title doesn't change, so tester is unable to confirm Shop Intenet button navigates to correct page

        //screenShot();
    })

    //Now on offers page
    it('Change zip code', function(){
        browser.waitForExist(changeLoc);
        browser.click(changeLoc);
        chai.assert.exists(street, 'Edit address modal did not appear');
        //screenShot();
    })

    //failing performance test as well for negative test case
    it('Enter new address', function(){
        browser.pause(1000);
        browser.setValue(street, '24234234');
        browser.setValue(city, '24234234');
        browser.selectByValue(state, 'SC');
        browser.setValue(zip, '24234234');
        browser.click(checkAvailability);
        // wait for checkAvailability to finish   
        browser.pause(25000);
        chai.assert.equal(browser.getText(updatedZip), 'Showing prices for 24234234.\nChange Location ›', 'Expecting zip code to be updated with invalid value');
        browser.saveScreenshot('./screenshots/tc_2.png');
    })

});

function open(){
    browser.url('');
    browser.windowHandleMaximize();
}