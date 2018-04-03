// page url = https://internet.frontier.com/cart/unserviceable

// page objects
const Base = require('./base.js');

class Unserviceable extends Base {

    constructor(){

        super();

        this._unserviceableURL = 'https://internet.frontier.com/cart/unserviceable';
        this._startOver = '#router > section > div.section__footer.section__text-centered > div > div > button';

    }

    get unserviceable() { return this._unserviceableURL; }
    get startOver() { return this._startOver; }

}

module.exports = Unserviceable;