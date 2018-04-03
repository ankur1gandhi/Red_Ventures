// url = https://internet.frontier.com/

// page objects
const Base = require('./base.js');

// extra libraries
// const webdriverio = require('webdriverio');
// const assert = require('assert');
// const chai = require('chai');

class HomePage extends Base {

    constructor(){

        super();

        // page URL
        this._homeURLAfterElementClick = 'https://internet.frontier.com/#';

        // page css selectors
        this._plansPricing = '#menu-item-4313';
        this._allPlans = '#menu-item-5108 > a:nth-child(1)';
        this._bundles = '#menu-item-4321 > a:nth-child(1)';
        this._frontierFiOSBundles = '#menu-item-5159 > a:nth-child(1)';
        this._frontierSecure = '#menu-item-4367 > a:nth-child(1)';

        this._internet = '#menu-item-4314';
        this._tv = '#menu-item-4440';

        this._shopInternet = '#js-track-home-hero';
        this._frontierHomePhone = '#nav-footer-menu-item-6069';
    }

    get homeURLAfterElementClick() { return this._homeURLAfterElementClick; }

    get plansPricing() { return this._plansPricing; }
    get allPlans() { return this._allPlans; }
    get bundles() { return this._bundles; }
    get frontierFiOSBundles() { return this._frontierFiOSBundles; }
    get frontierSecure() { return this._frontierSecure; }

    get internet() { return this._internet; }
    get tv() { return this._tv; }

    get shopInternet() { return this._shopInternet; }
    get frontierHomePhone() { return this._frontierHomePhone; }

}

module.exports = HomePage;