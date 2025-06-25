let homePage = require('../pages/homePage')


describe('Calculation demo', function () {
    it('addition of numbers', function () {


        //with page Object Model
        homePage.get('http://juliemr.github.io/protractor-demo/')
        homePage.enterFirstNumber('5');
        homePage.enterSecondNumber('5');
        homePage.clickOngo();
        homePage.verifyResults('10');



        //with out page object model

        /* browser.get('http://juliemr.github.io/protractor-demo/');
         element(by.model('first')).sendKeys('3');
 
         element(by.model('second')).sendKeys('3');
 
         element(by.id('gobutton')).click();
         browser.sleep(2222);
 
         let result = element(by.cssContainingText('.ng-binding', '6')).getText();
         expect(result).toEqual('6');
 
 */
    });

    it("subsctract",function(){
          //with page Object Model
          homePage.get('http://juliemr.github.io/protractor-demo/')
          homePage.enterFirstNumber('5');
          homePage.enterSecondNumber('5');
          homePage.clickOngo();
          homePage.verifyResults('11');
          browser.sleep(4000);
    })
});