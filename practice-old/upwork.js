describe('Interaction with website', () => {

    it('Gets header value', () => {
        browser.url('http://upwork.com');

        // const inputField = $('input.form-control');
        // inputField.setValue('Programming');
        // const search2 = $(' button.btn.p-0-left-right');
        // search2.click();
        // browser.pause(3000);


        const howItWorks = $('[data-link-id="signup_link"]');
        howItWorks.click();
        browser.pause(5000);
        console.log(howItWorks);
    }); 
});

