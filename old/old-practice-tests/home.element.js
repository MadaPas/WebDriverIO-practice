const homePage = require('../old-pages/homepage');

describe('Home page elements handle', () => {
    
    it('Verifies home page elements', () => {
        browser.url('https://www.freshworks.com/');
        console.log(homePage.pageHeader.getText());
        console.log(homePage.subHeading.getText());
        homePage.platformLink.click();
        browser.pause(2000);
    });
});