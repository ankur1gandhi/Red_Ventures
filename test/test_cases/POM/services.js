// url = https://internet.frontier.com/services/

// page objects
const Base = require('./base.js');

// extra libraries
// const webdriverio = require('webdriverio');
// const assert = require('assert');
// const chai = require('chai');

class Services extends Base {
    
    constructor() {

        super();

        // page URL
        this._servicesURL = 'https://internet.frontier.com/services/';
        this._servicesUpdatedURL = 'https://internet.frontier.com/plans-pricing.html';

        // page css selectors
        // body > main > section.hero.hero--services > div > div > div > div.medium-5.large-12.columns > div > h3
        this._changeLoc ='#js-track-hero-change-location';
        this._selectPlanSimply = '#js-track-plans-pricing-button-1';
        this._updatedZip = "h3.headline-light";

        // Change Address modal
        this._street = '#street';
        this._city = '#city';
        this._state = '#state';
        this._zip = '#zip';
        this._state = '#state';
        this._checkAvailability = '#js-track-form-full-check-availability';

        // Order Online modal
        this._orderOnlineButton = '#js-modal-cart-order-1 > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > a:nth-child(2)';

    }

    get servicesURL() { return this._servicesURL; }
    get servicesUpdatedURL() { return this._servicesUpdatedURL; }

    get changeLoc() { return this._changeLoc; }
    get selectPlanSimply() { return this._selectPlanSimply; }
    get updatedZip() { return this._updatedZip; }

    get street() { return this._street; }
    get city() { return this._city; }
    get zip() { return this._zip; }
    get state() { return this._state; }
    get checkAvailability() { return this._checkAvailability; }

    get orderOnlineButton() { return this._orderOnlineButton; }

}

module.exports = Services;