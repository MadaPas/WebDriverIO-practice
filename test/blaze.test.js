const blazePage = require('../pages/blazemeter');

describe('Blaze page elements handle', () => {

    beforeEach(() => {
        browser.url('https://www.blazemeter.com/');
    });

    it.only('Gets text of all main links (navbar)', () => {  // use .only to run only one test
        blazePage.getTextForLiNoParent;
    });

    it('Gets text of all use cases (bottom)', () => {
        blazePage.useCasesElementsText;
    });

    it('Gets text of all use cases, bottom (no parent used)', () => {
        blazePage.getTextForLiNoParent;
    });

});