var Objects = require("./Objects.json");
var log4js = require('log4js');
var logger = log4js.getLogger();
var SelectWrapper = require('./select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));

describe(
		'open add user page',
		function() {
			beforeEach(function() {

				browser.get(Objects.BASEURL);
				browser.manage().window().maximize();

			});

			it(
					'open Add user page for testing',
					function() {

						// login page title
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

						// now check for the mandatory errors
						// firstname

						var elmDiv = element.all(
								by.cssContainingText('div', 'First name'))
								.last();

						var elmInput = elmDiv.element(by.css('[id^="md"]'));
						elmInput.sendKeys(protractor.Key.TAB);

						// lastname
						var elmDiv = element.all(
								by.cssContainingText('div', 'Last name'))
								.last();
						var elmInput = elmDiv.element(by.css('[id^="md"]'));
						elmInput.sendKeys(protractor.Key.TAB);

						// mobile number
						var elmDiv = element.all(
								by.cssContainingText('div', 'Mobile number'))
								.last();
						var elmInput = elmDiv.element(by.css('[id^="md"]'));
						elmInput.sendKeys(protractor.Key.TAB);

						// Landline number
						var elmDiv = element.all(
								by.cssContainingText('div', 'Landline number'))
								.last();
						var elmInput = elmDiv.element(by.css('[id^="md"]'));
						elmInput.sendKeys(protractor.Key.TAB);

						// Temporary address
						var elmDiv = element.all(
								by
										.cssContainingText('div',
												'Temporary address')).last();
						var elmInput = elmDiv.element(by.css('[id^="md"]'));
						elmInput.sendKeys(protractor.Key.TAB);

						// permanent address
						var elmDiv = element.all(
								by
										.cssContainingText('div',
												'Permanent address')).last();
						var elmInput = elmDiv.element(by.css('[id^="md"]'));
						elmInput.sendKeys(protractor.Key.TAB);

						// select country
						var elmDiv = element.all(
								by
										.cssContainingText('Select',
												'Select country')).last();
						elmDiv.sendKeys(protractor.Key.TAB);

						// select state
						var elmDiv = element.all(
								by.cssContainingText('Select', 'Select state'))
								.last();
						elmDiv.sendKeys(protractor.Key.TAB);

						// select pincode
						var elmDiv = element.all(
								by.cssContainingText('div', 'Pincode')).last();
						var elmInput = elmDiv.element(by.css('[id^="md"]'));
						elmInput.sendKeys(protractor.Key.TAB);

						// select role
						var elmDiv = element.all(by.cssContainingText('div',
								'Select Role'));
						browser.actions().sendKeys(protractor.Key.TAB)
								.perform();

						// select temple
						var elmDiv = element.all(by.cssContainingText('div',
								'Select Temple name'));
						browser.actions().sendKeys(protractor.Key.TAB)
								.perform();

						// email address
						var elmDiv = element.all(
								by.cssContainingText('div', 'Email address'))
								.last();
						var elmInput = elmDiv.element(by.css('[id^="md"]'));
						elmInput.sendKeys(protractor.Key.TAB);

						// date of birth
						var elmDiv = element.all(by.cssContainingText('div',
								'Date of Birth'));
						browser.actions().sendKeys(protractor.Key.TAB)
								.perform();

						// election card number
						var elmDiv = element.all(
								by.cssContainingText('div',
										'Election card number')).last();
						var elmInput = elmDiv.element(by.css('[id^="md"]'));
						elmInput.sendKeys(protractor.Key.TAB);

						// Aadhar card number
						var elmDiv = element.all(
								by.cssContainingText('div',
										'Aadhar card number')).last();
						var elmInput = elmDiv.element(by.css('[id^="md"]'));
						elmInput.sendKeys(protractor.Key.TAB);

						// Driving license number
						var elmDiv = element.all(
								by.cssContainingText('div',
										'Driving licence number')).last();
						var elmInput = elmDiv.element(by.css('[id^="md"]'));
						elmInput.sendKeys(protractor.Key.TAB);

						// pan card number
						var elmDiv = element.all(
								by.cssContainingText('div', 'PAN card number'))
								.last();
						var elmInput = elmDiv.element(by.css('[id^="md"]'));
						elmInput.sendKeys(protractor.Key.TAB);
						browser.sleep(5000);

						// now get the mandatory errors
						// first name error
						var firstNameError = element(
								by.cssContainingText('small',
										'First name is mandatory.'))
								.getText()
								.then(
										function(text) {

											console.log(text);
											expect(text).toEqual(
													Objects.FIRSTNAMERROR);
											logger
													.info("FIRST NAME IS MANDATORY, ERROR IS PRESENT");
										});

						// lastname
						var lastNameError = element(
								by.cssContainingText('small',
										'Last name is mandatory.'))
								.getText()
								.then(
										function(text) {

											console.log(text);
											expect(text).toEqual(
													Objects.LASTNAMERROR);
											logger
													.info("LAST NAME IS MANDATORY, ERROR IS PRESENT");

										});

						// mobile number error
						var mobileNumberErr = element(
								by.cssContainingText('small',
										'Mobile number is mandatory.'))
								.getText()
								.then(
										function(text) {

											console.log(text);
											expect(text).toEqual(
													Objects.MOBILENUMBERERROR);
											logger
													.info("MOBILE NUMBER IS MANDATORY, ERROR IS PRESENT");

										});

						// country error
						var countryError = element(
								by.cssContainingText('small',
										'Country is mandatory.'))
								.getText()
								.then(
										function(text) {

											console.log(text);
											expect(text).toEqual(
													Objects.COUNTRYERROR);
											logger
													.info("COUNTRY IS MANDATORY, ERROR IS PRESENT");

										});

						// state error
						var stateError = element(
								by.cssContainingText('small',
										'State is mandatory.'))
								.getText()
								.then(
										function(text) {
											console.log(text);
											expect(text).toEqual(
													Objects.STATERROR);
											logger
													.info("STATE IS MANDATORY, ERROR IS PRESENT");

										});

						// city error
						var cityError = element(
								by.cssContainingText('small',
										'City is mandatory.'))
								.getText()
								.then(
										function(text) {
											console.log(text);
											expect(text).toEqual(
													Objects.CITYERROR);
											logger
													.info("CITY IS MANDATORY, ERROR IS PRESENT");

										});

						// role error
						var roleError = element(
								by.cssContainingText('small',
										'Role is mandatory.'))
								.getText()
								.then(
										function(text) {

											console.log(text);
											expect(text).toEqual(
													Objects.ROLERROR);
											logger
													.info("ROLE IS MANDATORY, ERROR IS PRESENT");

										});

						// temple error
						var templeError = element(
								by.cssContainingText('small',
										'Temple name is mandatory.'))
								.getText()
								.then(
										function(text) {

											console.log(text);
											expect(text).toEqual(
													Objects.TEMPLERROR);
											logger
													.info("TEMPLE NAME IS MANDATORY, ERROR IS PRESENT");

										});

						// refresh the page
						browser.navigate().refresh();

						// check for the maximum characters allowed for all
						// fields .
						// first name
						var fNLengthE = element.all(
								by.cssContainingText('div', 'First name'))
								.last();
						var get = fNLengthE.element(by.css('[id^="md"]'));
						get.sendKeys("a");

						// get the first name error
						var getFNError = element(
								by
										.cssContainingText('small',
												'First name between 2 to 60 characters.'))
								.getText()
								.then(
										function(text) {

											console.log(text);
											expect(text).toEqual(
													Objects.FNLENGTHE);
											logger
													.info("FIRST NAME BETWEEN 2 TO 60 CHARACTERS,ERROR IS PRESENT");

										});

						// last name
						var lNLengthE = element.all(
								by.cssContainingText('div', 'Last name'))
								.last();
						var get = lNLengthE.element(by.css('[id^="md"]'));
						get.sendKeys("s");

						// get the last name error
						var getLNError = element(
								by
										.cssContainingText('small',
												'Last name between 2 to 60 characters.'))
								.getText()
								.then(
										function(text) {

											console.log(text);
											expect(text).toEqual(
													Objects.LNLENGTHE);
											logger
													.info("LAST NAME BETWEEN 2 TO 60 CHARACTERS,ERROR IS PRESENT");

										});

						// mobile number
						var mobileNLError = element.all(
								by.cssContainingText('div', 'Mobile number'))
								.last();
						var get = mobileNLError.element(by.css('[id^="md"]'));
						get.sendKeys("c");

						// get the mobile error
						var getMNError = element(
								by
										.cssContainingText('small',
												'Mobile number between 10 to 14 characters.'))
								.getText()
								.then(
										function(text) {
											console.log(text);
											expect(text).toEqual(
													Objects.MOLENGTHE);
											logger
													.info("MOBILE NUMBER BETWEEN 10 TO 14 CHARACTERS,ERROR IS PRESENT");

										});

						// landline number
						var landlineNError = element.all(
								by.cssContainingText('div', 'Landline number'))
								.last();
						var get = landlineNError.element(by.css('[id^="md"]'));
						get.sendKeys("d");

						// get the landline number error
						var landlineError = element(
								by
										.cssContainingText('small',
												'Landline number between 7 to 12 characters.'))
								.getText()
								.then(
										function(text) {
											console.log(text);
											expect(text).toEqual(
													Objects.LANDLINELENGTHE);
											logger
													.info("LANDLINE NUMBER BETWEEN 7 TO 12 CHARACTERS,ERROR IS PRESENT");

											// temporary address
											var tempAError = element
													.all(
															by
																	.cssContainingText(
																			'div',
																			'Temporary address'))
													.last();
											var get = tempAError.element(by
													.css('[id^="md"]'));
											get.sendKeys("e");

											// get the temporary address error
											var temporaryAE = element(
													by
															.cssContainingText(
																	'small',
																	'Address between 2 to 250 characters.'))
													.getText()
													.then(
															function(text) {

																console
																		.log(text);
																expect(text)
																		.toEqual(
																				Objects.ADRLENGTHE);
																logger
																		.info("ADDRESS BETWEEN 2 TO 250 CHARACTERS,ERROR IS PRESENT");

															});

											// permanent address
											var permaAError = element
													.all(
															by
																	.cssContainingText(
																			'div',
																			'Permanent address '))
													.last();
											var get = permaAError.element(by
													.css('[id^="md"]'));
											get.sendKeys("f");

											// get the permanent address error
											// var
											// permanentAE=element(by.cssContainingText('small','Address
											// between 2 to
											// 250
											// characters.')).getText().then(function(text){
											// console.log(text);
											// expect(text).toEqual(Objects.ADRLENGTHE);
											// logger.info("ADDRESS BETWEEN 2 TO
											// 250 CHARACTERS,ERROR IS
											// PRESENT");
											//										    	
											//										    	
											// });

											// select city length check
											var selectCity = element(by
													.xpath("//html/body/app-root/app-home/md-sidenav-layout/div[2]/div/app-user/app-add-user/div/form/div[1]/div[12]/div[1]/input"));
											browser.actions().mouseDown(
													selectCity).click()
													.perform();
											selectCity.sendKeys("h");

											// get the error
											var cityError = element(
													by
															.cssContainingText(
																	'small',
																	'City between 2 to 50 characters.'))
													.getText()
													.then(
															function(text) {

																console
																		.log(text);
																expect(text)
																		.toEqual(
																				Objects.CITYLENGTHE);
																logger
																		.log('CITY BETWEEN 2 TO 50 CHARACTERS,ERROR IS PRESENT');

															});

											// email address
											var emailError = element.all(
													by.cssContainingText('div',
															'Email address'))
													.last();
											var get = emailError.element(by
													.css('[id^="md"]'));
											get.sendKeys("g");
											browser.sleep(5000);

											// get the error message
											var emailErr = element(
													by
															.cssContainingText(
																	'small',
																	'Email address between 5 to 50 characters.'))
													.getText()
													.then(
															function(text) {

																console
																		.log(text);
																expect(text)
																		.toEqual(
																				Objects.EMAILENGTHE);
																logger
																		.info("EMAIL ADDRESS BETWEEN 5 TO 50 CHARACTERS,ERROR IS PRESENT");

															});

											// election card number
											var elecCErr = element
													.all(
															by
																	.cssContainingText(
																			'div',
																			'Election card number'))
													.last();
											var get = elecCErr.element(by
													.css('[id^="md"]'));
											get.sendKeys("i");

											// get the election card number
											// error
											var elecCError = element(
													by
															.cssContainingText(
																	'small',
																	'Election card between 2 to 25 characters.'))
													.getText()
													.then(
															function(text) {

																console
																		.log(text);
																expect(text)
																		.toEqual(
																				Objects.ELECTIONLENGTHE);
																logger
																		.log('ELECTION CARD BETWEEN 2 TO 25 CHARACTERS,ERROR IS PRESENT');

															});

											// aadhar card
											var adharCError = element
													.all(
															by
																	.cssContainingText(
																			'div',
																			'Aadhar card number'))
													.last();
											var get = adharCError.element(by
													.css('[id^="md"]'));
											get.sendKeys("j");

											// get the aadhar card error
											var adharCErr = element(
													by
															.cssContainingText(
																	'small',
																	'Aadhar card between 2 to 25 characters.'))
													.getText()
													.then(
															function(text) {

																console
																		.log(text);
																expect(text)
																		.toEqual(
																				Objects.AADHARLENGTHE);
																logger
																		.log('AADHAR CARD BETWEEN 2 TO 25 CHARACTERS,ERROR IS PRESENT');
															});

											// driving license
											var drivingLError = element
													.all(
															by
																	.cssContainingText(
																			'div',
																			'Driving licence number '))
													.last();
											var get = drivingLError.element(by
													.css('[id^="md"]'));
											get.sendKeys('k');

											// get the driving license error
											var drivingLError = element(
													by
															.cssContainingText(
																	'small',
																	'Driving licence between 2 to 25 characters.'))
													.getText()
													.then(
															function(text) {

																console
																		.log(text);
																expect(text)
																		.toEqual(
																				Objects.DRIVINGLENGTHE);
																logger
																		.info("DRIVING LICENCE BETWEEN 2 TO 25 CHARACTERS,ERROR IS PRESENT");

															});
//
											// pan card number
											var panCNError = element
													.all(
															by
																	.cssContainingText(
																			'div',
																			'PAN card number'))
													.last();
											var get = panCNError.element(by
													.css('[id^="md"]'));
											get.sendKeys('l');

											// get the pan card number error
											var drivingLError = element(
													by
															.cssContainingText(
																	'small',
																	'PAN card between 2 to 25 characters.'))
													.getText()
													.then(
															function(text) {

																console
																		.log(text);
																expect(text)
																		.toEqual(
																				Objects.PANCLENGTHE);
																logger
																		.info("PAN CARD NUMBER BETWEEN 2 TO 25 CHARACTERS,ERROR IS PRESENT");

																
															});
											
											browser.sleep(5000);

										});

					});

		});
