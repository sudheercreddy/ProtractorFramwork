let homePage = function () {

    let firstnumber_Input = element(by.model('first'));
    let secondNumber_Input = element(by.model('second'));
    let goButton = element(by.id('gobutton'));

    this.enterFirstNumber = function (firstno) {
        firstnumber_Input.sendKeys(firstno);
    };

    this.enterSecondNumber = function (secondNo) {
        secondNumber_Input.sendKeys(secondNo)
    };

    this.clickOngo = function () {
        goButton.click();
    };

    this.verifyResults = function (result) {
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);

    };

    this.get = function (url) {
        browser.get(url);
    }



};

module.exports = new homePage();