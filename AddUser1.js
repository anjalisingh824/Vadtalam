var Objects = require("./Objects.json");
var log4js = require('log4js');
var logger = log4js.getLogger();
describe(
		'testing vadtal',
		function() {

			beforeEach(function() {

				browser.get(Objects.BASEURL);
				browser.manage().window().maximize();

			});
			it(
					'start testing',
					function() {

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

						// check for the special characters in each field
						
						// first name
						var fNLengthE = element.all(
								by.cssContainingText('div', 'First name'))
								.last();
						var get = fNLengthE.element(by.css('[id^="md"]'));
						get.sendKeys("@#$%%^&");

						// get the first name error
						var getFNError = element(
								by
										.cssContainingText('small',
												'Enter valid first name.'))
								.getText()
								.then(
										function(text) {

											console.log(text);
											expect(text).toEqual(
													Objects.VALIDFNERROR);
											logger
													.info("ENTER VALID FIRST NAME,ERROR IS PRESENT");

										});
						
						
						// last name
						var lNLengthE = element.all(
								by.cssContainingText('div', 'Last name'))
								.last();
						var get = lNLengthE.element(by.css('[id^="md"]'));
						get.sendKeys("@#$%^&&");

						// get the last name error
						var getLNError = element(
								by
										.cssContainingText('small',
												'Enter valid last name.'))
								.getText()
								.then(
										function(text) {

											console.log(text);
											expect(text).toEqual(
													Objects.VALIDLNERROR);
											logger
													.info("ENTER VALID LAST NAME,ERROR IS PRESENT");

										});
						
						
						// mobile number
						var mobileNLError = element.all(
								by.cssContainingText('div', 'Mobile number'))
								.last();
						var get = mobileNLError.element(by.css('[id^="md"]'));
						get.sendKeys("@#$%^^$%^&*");

						// get the mobile error
						var getMNError = element(
								by
										.cssContainingText('small',
												'Enter valid mobile number.'))
								.getText()
								.then(
										function(text) {
											console.log(text);
											expect(text).toEqual(
													Objects.VALIDMNERROR);
											logger
													.info("ENTER VALID MOBILE NUMBER,ERROR IS PRESENT");

										});

						
						
						// landline number
						var landlineNError = element.all(
								by.cssContainingText('div', 'Landline number'))
								.last();
						var get = landlineNError.element(by.css('[id^="md"]'));
						get.sendKeys("@#$%^&*(@");

						// get the landline number error
						var landlineError = element(
								by
										.cssContainingText('small',
												'Enter valid landline number.'))
								.getText()
								.then(
										function(text) {
											console.log(text);
											expect(text).toEqual(
													Objects.VALIDLLNERROR);
											logger
													.info("ENTER VALID LANLINE NUMBER,ERROR IS PRESENT");
						
										});
						
						
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
						get.sendKeys("@$%^^&&");
						
						
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
						get.sendKeys("@#$%^&");
						
						
						// select city length check
						var selectCity = element(by
								.xpath("//html/body/app-root/app-home/md-sidenav-layout/div[2]/div/app-user/app-add-user/div/form/div[1]/div[12]/div[1]/input"));
						browser.actions().mouseDown(
								selectCity).click()
								.perform();
						selectCity.sendKeys("@#$%%");

						// get the error
						var cityError = element(
								by
										.cssContainingText(
												'small',
												'Enter valid city.'))
								.getText()
								.then(
										function(text) {

											console
													.log(text);
											expect(text)
													.toEqual(
															Objects.VALIDCITYERROR);
											logger
													.info('ENTER VALID CITY,ERROR IS PRESENT');

										});
						
						//pincode 
						var emailError = element.all(
								by.cssContainingText('div',
										'Pincode '))
								.last();
						var get = emailError.element(by
								.css('[id^="md"]'));
						get.sendKeys("@#$%^&*");
					

						// get the error message
						var emailErr = element(
								by
										.cssContainingText(
												'small',
												'Enter valid pincode.'))
								.getText()
								.then(
										function(text) {

											console
													.log(text);
											expect(text)
													.toEqual(
															Objects.VALIDPINCODEE);
											logger
													.info("ENTER VALID PINCODE,ERROR IS PRESENT");

										});

						
						// email address
						var emailError = element.all(
								by.cssContainingText('div',
										'Email address'))
								.last();
						var get = emailError.element(by
								.css('[id^="md"]'));
						get.sendKeys("@#$%^&");
						browser.sleep(5000);

						// get the error message
						var emailErr = element(
								by
										.cssContainingText(
												'small',
												'Enter valid email address.'))
								.getText()
								.then(
										function(text) {

											console
													.log(text);
											expect(text)
													.toEqual(
															Objects.VALIDEMAILAERROR);
											logger
													.info("ENTER VALID EMAIL ADDRESS,ERROR IS PRESENT");

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
						get.sendKeys("@#$$%%");

						// get the election card number
						// error
						var elecCError = element(
								by
										.cssContainingText(
												'small',
												'Enter valid id proof.'))
								.getText()
								.then(
										function(text) {

											console
													.log(text);
											expect(text)
													.toEqual(
															Objects.VALIDIDPROOFERROR);
											logger
													.info('ENTER VALID ID PROOF,ERROR IS PRESENT');

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
						get.sendKeys("@#$%%^");

						// get the aadhar card error
						var adharCErr = element(
								by
										.cssContainingText(
												'small',
												'Enter valid id proof.'))
								.getText()
								.then(
										function(text) {

											console
													.log(text);
											expect(text)
													.toEqual(
															Objects.VALIDIDPROOFERROR);
											logger
													.info('ENTER VALID ID PROOF,ERROR IS PRESENT');
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
						get.sendKeys('@#$$%^');

						// get the driving license error
						var drivingLError = element(
								by
										.cssContainingText(
												'small',
												'Enter valid id proof.'))
								.getText()
								.then(
										function(text) {

											console
													.log(text);
											expect(text)
													.toEqual(
															Objects.VALIDIDPROOFERROR);
											logger
													.info("ENTER VALID ID PROOF,ERROR IS PRESENT");

										});
						//
						// pan card number
						var panCNError = element.all(
								by.cssContainingText('div',
										'PAN card number'))
								.last();
						var get = panCNError.element(by
								.css('[id^="md"]'));
						get.sendKeys('l@#$%^&');

						// get the pan card number error
						var drivingLError = element(
								by
										.cssContainingText(
												'small',
												'Enter valid id proof.'))
								.getText()
								.then(
										function(text) {

											console
													.log(text);
											expect(text)
													.toEqual(
															Objects.VALIDIDPROOFERROR);
											logger
													.info("ENTER VALID ID PROOF,ERROR IS PRESENT");

										});

						
						
						
						
						browser.sleep(5000);
						
						

					});

		});
