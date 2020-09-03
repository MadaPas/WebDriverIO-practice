const { TouchSequence } = require("selenium-webdriver");

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


    navSpecificElement(index) {
        return this.navParent.$(`li:nth-child(${index})`)
    }
    footerSpecificElement(index) {
        return this.footerParent.$(`li:nth-child(${index})`)
    }

}
module.exports = new BlazePage();