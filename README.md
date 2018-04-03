# Red_Ventures

Installation Guide (best used by Windows 10 users)
1) Download and install Node.js - https://nodejs.org/en/download/
2) Download Java - http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
3) Open command line/Windows Powershell
4) Install webdriverio - type 'npm install webdriverio --save-dev'
	a) This adds node_modules folder and package-lock.json
5) Type './node_modules/.bin/wdio'
	a) Choose 'on local machine', press enter
	b) Choose 'mocha', press enter
	c) Enter 'y', when asked to install framework
	d) Enter desired specs location, press enter
	e) Choose spec, press enter
	f) Enter 'y', when asked to install reporter library
	e) Choose selenium-standalone, press enter
	g) Enter 'y', when asked to install services
	h) Choose 'command', press enter
	i) Enter desired error screen shot directory
	j) Enter base url for testing - https://internet.frontier.com/
	k) This will create wdio.conf.js file
6) Install chai - type 'npm install chai'
7) To run tests - type 'npm test'

# Test Approach
To start this project, I downloaded and isntalled all necessary tools and ran a sample script to verify there are no hitches. I went to the Frontier website and explored. By clicking through multiple links and mousing through any text, I chose what functionalities to automate. Since JavaScript is for front end development, I chose functionalities and features that are important to the UI, although some test cases like the gatekeeper can be affected by back end matters such as input validation. 
	Next came time to start work on automation scripts. Knowing ahead of time what I wanted to test, I created the structure for my code using the Page Object Modeling structure. In short, every page I intend to test is it's own file containing all methods/elements that pertain to that page. There is also a base file that includes any methods or elements used multiple times throughout all test scripts. This base file will be extended by all page object files. 
	Finally, I created another set of files told hold each test case. Within these files are describe/it blocks for unit testing. The 'describe' provides information of the overarching test while the 'it' provides information for the contents of the 'it' block. The purpose of the describe/it blocks is for easy readability for others who look at the scripts, whether they are 
programmers or not. This is classified as Behavior Driven Development, or BDD. 

# Test Execution
Text execution was done by through running a test script, debugging, and refactoring it. One 'it' block was tested at a time. Only one browser (chrome) was used for testing at the start. Once all test scripts were complete and working on Chrome, did I then move on to adding Firefox and IE through multiremote. Internet Explorer proved an unsuccessful venture as IE is not fully compatible with automation software at this time. Firefox proved successful, but not for the Frontier site. The Frontier site does not load through automation on Firefox. A "Your connection is not secure" message appears, blocking the site from loading. Although multiple methods were implemented to circumvent this (making Frontier website an exception, editing Firefox config, and creating a Firefox profile), not of the methods proved successful for the Frontier website. Other sites, such as https://www.google.com/ can be automated with Firefox as the browser.

# Bugs
Lastly, a couple bugs were found on the Frontier website. On the /services page, the Change Address modal lacks input validation or feasible boundry constraints. For example, the City field on the modal allows only digits to be input. The zip code field allows far more than 9 digits. This also means the zip code that is updated on the webpage itself will show all the digits entered
in the zip code field, no matter how long.  
