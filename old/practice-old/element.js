describe('Interaction with web elements', () => {

    it('Enters value in search field', () => {
        browser.url('/');
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple Mac Book');
        browser.pause(3000);
    });

    it('Gets the text from a span', () => {
        browser.url('/');
        const label = $('#glow-toaster-body');
        label.getText();
        browser.pause(3000);
    });

    it('Clicks on search button', () => {
        browser.url('/');
        const search = $('#twotabsearchtextbox');
        search.setValue('Apple Mac Book');
        browser.pause(3000);
        const submitB = $('input.nav-input');
        submitB.click();
        browser.pause(5000);
    });

    it('Searches by category', () => {
        browser.url('/');
        //click 3 dots
        const menu = $('a#nav-hamburger-menu');
        menu.click();
        const category = $('a.hmenu-item');
        category.click();
        const cat = $('#hmenu-content > ul.hmenu.hmenu-visible.hmenu-translateX > li:nth-child(7)');
        cat.click();
        const play = $('div.playButton');
        play.click();
        browser.pause(5000);
        const signup = $('a.buttonOption.startTrial.button');
        signup.click();

        const name = $('#ap_customer_name');
        const email = $('#ap_email');
        const password = $('#ap_password');
        const rePassword = $('#ap_password_check');

        name.setValue('User');
        email.setValue('Userescu');
        password.setValue('PASS12#');
        rePassword.setValue('PASS12#');

        const submitButton = $('input#continue.a-button-input');
        submitButton.click();


    });
});