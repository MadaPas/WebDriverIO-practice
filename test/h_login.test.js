herokuApp = require('../pages/heroku.page');
loginInfo = require('../data/login.data');

describe('Test logging in on the website', () => {

    before(() => {
        browser.url('https://the-internet.herokuapp.com/login');
    });
    it('Should enter the username', () => {
        herokuApp.enterUsername(loginInfo.userName);
        assert.equal(loginInfo.userName, herokuApp.username.getValue());
    });

    it('Should enter the password', () => {
        herokuApp.enterPassword(loginInfo.Password);
        assert.equal(loginInfo.Password, herokuApp.password.getValue());
    });

    it('Should clear the value', () => {
        herokuApp.username.click();
        herokuApp.username.clearValue();
        assert.equal('', herokuApp.username.getValue());
    });
});