const blazePage = require('../pages/blazemeter');

describe('Blaze page elements handle', () => {

    beforeEach(() => {
        browser.url('https://www.blazemeter.com/');
    });

    it('Gets text of all main links (navbar)', () => { // use .only to run only one test

        blazePage.navGetTextForLi;
        blazePage.navGetTextForLiNoParent;
    });

    it('Gets text of all use cases (bottom)', () => {
        blazePage.footerGetTextForLi;
        blazePage.footerGetTextForLiNoParent;
    });

    it('Gets a specific child (non-getter methods)', () => {
        // console.log('nav-print: ' + blazePage.navSpecificElement(3).getText());
        // console.log('footer-print: ' + blazePage.footerSpecificElement(3).getText());
        blazePage.getNavSpecificChildElementText(2);
        blazePage.getFooterSpecificChildElementText(1);
    })

    it('Main heading', () => {
        browser.pause(2000);
        console.log('element-disabled' + blazePage.mainHeader.isDisplayed());  // RESULT -> true or false 
        console.log('element-enabled' + blazePage.mainHeader.isEnabled());
        console.log('element-existing' + blazePage.mainHeader.isExisting());
        console.log('element-viewport' + blazePage.mainHeader.isDisplayedInViewport());
        browser.pause(2000);
        console.log('jmeter element: ' + blazePage.jmeterElement.isDisplayedInViewport());
        browser.pause(2000);

    });
    it.only('Click on product link (if displayed)', () => {
        browser.pause(2000);
        blazePage.clickOnProductLink();
        browser.pause(3000);

    });

});