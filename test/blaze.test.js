const blazePage = require('../pages/blazemeter');

describe('Blaze page elements handle', () => {

    // beforeEach(() => {
    //     browser.url('https://www.blazemeter.com/');
    // });

    it('Gets text of all main links (navbar)', () => {  // use .only to run only one test
        
        browser.url('https://www.blazemeter.com/');
        blazePage.navGetTextForLi;
        blazePage.navGetTextForLiNoParent;
    });

    it('Gets text of all use cases (bottom)', () => {
        browser.url('https://www.blazemeter.com/');
        blazePage.footerGetTextForLi;
        blazePage.footerGetTextForLiNoParent;
    });

});