// page url = https://internet.frontier.com/cart/verifyHouse

// page objects
const Base = require('./base.js');

class VerifyHouse extends Base {

    constructor(){

        super();
        this._close = '.banner__icon-close';
        this._headline = 'h2.headline-label:nth-child(2)';
    }

    get close() { return this._close; }
    get headline() { return this._headline; }
}

module.exports = VerifyHouse;