// url = https://internet.frontier.com/cart/address

// page objects
const Base = require('./base.js');

// extra libraries
// const webdriverio = require('webdriverio');
// const assert = require('assert');
// const chai = require('chai');

class CartAddress extends Base {

    constructor(){
        
        super();

        // page URL
        this._cartAddressURL = 'https://internet.frontier.com/cart/address';

        this._address = '#address';
        this._city = '#city';
        this._state = '#State';
        this._zip = '#zip';
        this._continue = '#router > section > div.section__footer > div > div > button';
    }

    get cartAddressURL() { return this._cartAddressURL; }

    get address() { return this._address; }
    get city() { return this._city; }
    get state() { return this._state; }
    get zip() { return this._zip; }
    get continue() { return this._continue; }

}

module.exports = CartAddress;