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

});