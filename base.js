let babel = require(babel);

//contains general info
export default class Base {
    //contains general elements
	constructor() {
        //this.title = 'Base';
        // this.path = 'https://internet.frontier.com/';
	}

    //open browserURL in config
	open(){
        browser.url('');
        browser.windowHandleMaximize();
    }
}

 