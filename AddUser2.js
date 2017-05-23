var Objects = require("./Objects.json");
var log4js = require('log4js');
var logger = log4js.getLogger();
var SelectWrapper = require('./select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));

describe('testing vadtal',function(){

	beforeEach(function(){
		
		browser.get(Objects.BASEURL);
		browser.manage().window().maximize();
		
		
	});
	
	it('started testing',function(){
		
		expect(browser.getTitle()).toEqual(
				Objects.LOGINPAGETITLE);
		logger.info("Login page title is correct");

		// enter username
		element(by.css("input[type='text']")).sendKeys(
				Objects.USERNAME);

		// enter password
		element(by.css("input[type='password']")).sendKeys(
				Objects.PASSWORD);
		element(by.buttonText("Sign in")).click();
		browser.sleep(5000);

		// verify title page of the next page
		expect(browser.getTitle()).toBe(Objects.HOMEPAGETITLE);
		logger.info("Home page title is correct")

		// click on the add user menu
		element(
				by
						.xpath("//html/body/app-root/app-home/md-sidenav-layout/div[2]/div/app-appboard/div/md-card/md-card-content/md-grid-list/div/md-grid-tile[1]/figure/a/md-card/md-card-title-group/div"))
				.click();

		browser.sleep(5000);

		// check for the add user page title
		expect(browser.getTitle()).toBe(Objects.ADDUSERTITLE);
		logger.info("Add user page title is correct");

		// click on the add user button
		element(by.className("md-24 material-icons")).click();
		browser.sleep(5000);
		
		
	   //pass the values now
		//firstname
		var fNLengthE = element.all(
				by.cssContainingText('div', 'First name'))
				.last();
		var get = fNLengthE.element(by.css('[id^="md"]'));
		get.sendKeys("Anjali");
		
		// last name
		var lNLengthE = element.all(
				by.cssContainingText('div', 'Last name'))
				.last();
		var get = lNLengthE.element(by.css('[id^="md"]'));
		get.sendKeys("Singh");
		
		
		// mobile number
		var mobileNLError = element.all(
				by.cssContainingText('div', 'Mobile number'))
				.last();
		var get = mobileNLError.element(by.css('[id^="md"]'));
		get.sendKeys("8197991486");
		
		//select country name from dropdown
		element(by.cssContainingText('option', 'India')).click();
		
		//select state from dropdown
		element(by.cssContainingText('option', 'Gujarat')).click();
		
		browser.sleep(5000);
		
		//city
		var selectCity = element(by
				.xpath("//html/body/app-root/app-home/md-sidenav-layout/div[2]/div/app-user/app-add-user/div/form/div[1]/div[12]/div[1]/input"));
		browser.actions().mouseDown(
				selectCity).click()
				.perform();
		selectCity.sendKeys("surat");
		
		//select role
		var elmDiv = element.all(by.cssContainingText('div',
		'Select Role'));
        
		
		
		
		
	});
	
	
	
	
});
