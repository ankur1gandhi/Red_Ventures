//page objects
/* let _base = require('./POM/base');
let _homePage = require('./POM/homePage'); */

// extra addins
let webdriverio = require('webdriverio');
let assert = require('assert');
let chai = require('chai');

//global variables
//general
let count = 1;
//pages
let element;
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
//Page 2.order_online_modal
let orderOnlineButton = '#js-modal-cart-order-1';


describe('Shop internet flow (positive):', function() {
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
        if(browser.waitForExist(changeLoc)){
            browser.click(changeLoc);
            chai.assert.exists(street, 'Edit address modal successfully appeared');
        }
        else{
            assert(false, "Edit address modal did not show");
        }
        //screenShot();
    })

    //edit address
    it('Enter new address, positive case', function(){
        // browser.url('/'); //necessary?
        browser.pause(1000); //more efficient method for waiting for modal?
        //mocha doesn't include tool for 'dataprovider'
        browser.setValue(street, '1101 Red Ventures Dr');
        browser.setValue(city, 'Fort Mill');
        browser.selectByValue(state, 'SC');
        browser.setValue(zip, '29707');
        browser.click(checkAvailability);
        browser.pause(25000);
        console.log(browser.getText(updatedZip));
        chai.assert.equal(browser.getText(updatedZip), 'Showing prices for 29707.\nChange Location ›', 'Expecting zip code to be updated wtih valid value');
        // browser.saveScreenshot('./screenshots/snap3.png');
    })

    //Could create test case to verify all Select Plan options open Order Online modal

    //Should open modal for ordering online 
    it('Select Simply Internet Ultra plan', function() {
        browser.pause(2000);
        browser.click(selectPlanSimply);
        chai.assert.exists(orderOnlineButton, 'Modal for opening online did not appear');
        //screenShot()
    })

    //Continue Order Online flow
    it('Click now to order', function() {
        browser.pause(1000);
        browser.click(orderOnlineButton);
        browser.pause(5000);
        console.log(browser.getTitle);
        chai.assert.equal(browser.getTitle(), 'Frontier Logo', 'Page title not found - New page not open');
    })
    count = 0;
});


//below here code would ideally be in a 'set up' file, seperate from unit tests


function open(){
    browser.url('');
    browser.windowHandleMaximize();
}

function screenShot(){
    browser.saveScreenshot('./screenshots/snap' + count + '.png');
    count++;
}