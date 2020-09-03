describe('Interaction with website', () => {

    it('Gets header value', () => {
        browser.url('https://www.freshworks.com');
        const header = $('h1');
        let text = header.getText();
        console.log(text);
        browser.pause(3000);
    }); 
});