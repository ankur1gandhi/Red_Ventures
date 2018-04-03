// contains general methods or elements used throughout tests

// extra libraries
// const webdriverio = require('webdriverio');
// const assert = require('assert');
// const chai = require('chai').expect;

class Base {
    // contains general elements
	constructor() {

        // this._path = '';
        this._fileName =  '';
        // counter used as part of screenshot naming convention
        // each 'it' clause that requires screenshot will increment this by 1 and add that number to the name of the screenshot
        this._count = 1;
	}

    // create wait times
    /* timeouts(type) {  
        if(type === 'script'){
            browser.timeouts(type, 1000);
        }
        else if(type === 'pageLoad'){    
            browser.timeouts(type, 7000);
        }
        else if(type === 'implicit'){
            browser.timeouts(type, 25000);      
        }
        else{
            console.log("Incorrect timeout type");
        }
    }; */
    
    // NO LONGER USING COUNT
    //update count value. Should happen at the beginning of every test script execution
    /* set count(countIn) { 
        // verify no string or non-integer inputs so naming convention is not incorrect
        if(chai(countIn).to.be.above(0)) {
            this._count = countIn; 
        }
    } */
    // set path(pathIn) { return this._fileName = pathIn; }
    // updates fileName for each test script
    set fileName(fileNameIn) { return this._fileName = fileNameIn; }

    // get path() { return this._path; }
    get fileName() { return this._fileName; }
    get count() { return this._count; }

    // open browserURL in config
    open(path){
        browser.url(path);
        browser.windowHandleMaximize();
    };

    // take screenshot
    screenShot(){
        browser.saveScreenshot('./screenshots/' + this._fileName + '_' + this._count + '.png');
        this._count++;
    };
    
}

module.exports = Base; 