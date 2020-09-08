class HerokuApp {

    // finding elements
    get pageHeader() {
        return $("h1.heading");
    }
    get subHeading() {
        return $("h2");
    }
    get h3Header() {
        return $("h3");
    }
    get pageFooter() {
        return $("#page-footer");
    }
    get parent() {
        return $("#content ul");
    }
    get childElements() {
        return this.parent.$$("li");
    }

    // ways of getting the link(s)
    // #1
    get firstLink() {
        return $("ul li:nth-child(1) a");
    }
    // #2
    getLinkElement(index) {
        return $(`ul li:nth-child(${index}) a`);
    }

    specificChildElement(index) {
        return this.parent.$(`li:nth-child(${index})`);
    }

    /**
     * Click on the link based on the index provided ()
     */
    clickLink(index) {
        this.getLinkElement(index).waitForDisplayed();
        this.getLinkElement(index).click();
    }
    getCheckBokElement(index) {
        return $(`#checkboxes input:nth-child(${index})`);
    }
    clickCheckbox(index) {
        this.getCheckBokElement(index).waitForDisplayed();
        this.getCheckBokElement(index).click();
    }

    getLiText() {
        this.childElements.filter(element => {
            console.log(element.getText());
        });
    }
    getSpecificElementText(index) {
        this.specificChildElement(index).waitForDisplayed();
        return this.specificChildElement(index).getText();
    }
    clickOnLInk() {
        if (this.firstLink.isDisplayed() === true) {
            this.firstLink.click();
        }
        this.h3Header.waitForDisplayed();
    }


    // AUTH
    get username() {
        return $("#username");
    }
    get password() {
        return $("#password");
    }

    /**
     * Enter the username into the field
     */
    enterUsername(text) {
        this.username.waitForDisplayed();
        this.username.setValue(text);
    }
    /**
     * Enter the password into the field
     */
    enterPassword(text) {
        this.password.waitForDisplayed();
        this.password.setValue(text);
    }
}

module.exports = new HerokuApp();