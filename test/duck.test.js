const duck = require('../pages/duck.page')

describe('Duck search :)', () => {
    it('Searches for WDIO', () => {
        duck.open();
        duck.searchForm.setValue('WebdriverIO');
        duck.searchBtn.click();
        duck.duckGetTitle();
    });
});