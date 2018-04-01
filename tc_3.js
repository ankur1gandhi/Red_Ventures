// extra addins
let webdriverio = require('webdriverio');
let assert = require('assert');
let chai = require('chai');

//global variables

describe('Verify mouse hover over Services changes color:', function() {
    it(' black to red', function() {
        browser.url('');
        browser.windowHandleMaximize();
        browser.moveToObject('#nav-footer-menu-item-6069 > a:nth-child(1)');
        browser.pause(5000);
        assert(true);
    })
})