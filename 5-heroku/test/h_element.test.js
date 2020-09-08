herokuApp = require("../pages/heroku.page");

beforeEach(() => {
    browser.url('https://the-internet.herokuapp.com');
});

describe("Test some element actions", () => {

    it("Get text for element", () => {
        let el = $("h2").getText(); //direct
        let el1 = herokuApp.subHeading.getText(); //using page object to store locators
        let el2 = herokuApp.pageFooter.getText();
        console.log(el, "\n", el1, "\n", el2);
        herokuApp.getLiText();
        herokuApp.getSpecificElementText(3);
    });

    it("Check: footer displayed", () => {
        console.log(herokuApp.pageFooter.isDisplayed());
    });

    it("Check: header exists", () => {
        console.log(herokuApp.pageHeader.isExisting());
    });

    it("Check: footer in viewport", () => {
        console.log(herokuApp.pageFooter.isDisplayedInViewport());
    });

    it("Click on the element", () => {
        herokuApp.clickOnLInk();
    });

    it("should click on the element", () => {
        herokuApp.clickOnLInk();
        expect(browser.getUrl()).equals("https://the-internet.herokuapp.com/abtest");
    });

    it("Should get the text of a specific element", () => {
        expect(herokuApp.getSpecificElementText(1)).equals("A/B Testing");
        console.log('Text of the specified element is: ' + herokuApp.specificChildElement(1).getText());
    });

    it("Should click on the checkbox", () => {
        herokuApp.clickLink(6);
        expect(herokuApp.getCheckBokElement(1).isSelected()).equals(false);
        herokuApp.clickCheckbox(1);
        expect(herokuApp.getCheckBokElement(1).isSelected()).equals(true);
    });

    // it("Should un-check the checkbox", () => { // did not figure this out yet :/
    //     herokuApp.clickLink(6);
    //     herokuApp.clickCheckbox(1);
    //     expect(herokuApp.getCheckBokElement(1).isSelected()).equals(false);
    // });
});