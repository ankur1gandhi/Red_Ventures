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
base.fileName = 'tc_4';
base.count = 1;
let temp; //used to hold getCssProperty

describe('Verify mouse hover over bundle option Fronteir Home Phone changes color:', function() {
    
    //color should start off black
    it('black by default', function() {
        base.open('/');
        temp = browser.getCssProperty(homePage.frontierHomePhone, 'color');
        // For some reason, this test case will pass but npm test will output 0 passing
        // idea behind attempt below - maybe jason isn't of type string? below should convert the hex to string to be compared to the expected value
        // temp = '' + temp.parsed.hex;
        chai.assert.equal(temp.parsed.hex, '#5a5a5a', 'Color does not switch from red to black');
        base.screenShot();
    });
    
    //mouse hover causes css to choose red color
    /* it('black to red - mouse is hovering over bundle', function() {       
        browser.moveToObject(frontierHomePhone);
        temp = browser.getCssProperty('a', 'color');
        console.log(temp);
        chai.assert.equal(temp.parsed.hex, '#d62a33', 'Color does not switch to red');
        base.screenShot();
    }); */

});