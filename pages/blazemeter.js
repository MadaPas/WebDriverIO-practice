class BlazePage {

    // NAVBAR ELEMENTS 
    get navParent() {
        // return $('ul.list-nav-links');
        return $('nav#main-nav > ul.list-nav-links');
    }
    get navChildElements() {
        // return this.parent.$$('li');
        return this.navParent.$$('nav#main-nav > ul.list-nav-links > li');
    }
    get navChildElementsNoParent() {
        return $$('#main-nav > ul > li');
    }
    // methods to trigger in the test
    get navGetTextForLi() {
        return this.navChildElements.filter(element => {
            console.log('NAV-YES parents child: ' + element.getText()); // not getting the text of child elements
        })
    }
    get navGetTextForLiNoParent() {
        return this.navChildElementsNoParent.map(element => {
            console.log('NAV-NO parents-child: ' + element.getText());
        })
    }
    // FOOTER USE CASES ELEMENTS
    get footerParent() {
        return $('#main_b_footer_second_block > ul');
    }
    get footerChildElements() {
        return this.footerParent.$$('#main_b_footer_second_block > ul > li');
    }
    get footerChildElementsNoParent() {
        return $$('div#main_b_footer_second_block>ul>li');
    }

    // methods to trigger in the test
    get footerGetTextForLi() {
        return this.footerChildElements.filter(element => {
            console.log(' FOOTER-YES: ' + element.getText());
        })
    }
    get footerGetTextForLiNoParent() {
        return this.footerChildElementsNoParent.filter(element => {
            console.log(' FOOTER-NO: ' + element.getText());
        })
    }


    // NON-GETTER methods 
    navSpecificElement(index) {
        return this.navParent.$(`li:nth-child(${index})`)
    }
    footerSpecificElement(index) {
        return this.footerParent.$(`li:nth-child(${index})`)
    }

    getNavSpecificChildElementText(index) {
        return this.navSpecificElement(index).getText();
    }
    getFooterSpecificChildElementText(index) {
        return this.footerSpecificElement(index).getText();
    }


    // ########################################### //

    get mainHeader() {
        // 'return $('h2.home-features_title'); // make it break for testing
        return $('h2.home_video__title')
    }

    
    // create a wrapper for the mainHeader
    get productLink () {
        return $('ul.list-nav-links li:nth-child(1) a');
    }
    clickOnProductLink() {
        if(this.productLink.isDisplayed() === true) {
            this.productLink.click();
        }
    }

    get demoElement() {
        return $('a.home_request_demo_link');
    }
    get jmeterElement() {
        return $("//a[text()='JMeter']");
    }

}



module.exports = new BlazePage();