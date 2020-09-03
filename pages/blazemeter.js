class BlazePage {

    get oneElement() {
        return $('li:nth-child(3)');
    }

    // ##
    get parent() {
        // return $('ul.list-nav-links');
        return $('nav#main-nav > ul.list-nav-links');
    }
    get childElements() {
        // return this.parent.$$('li');
        return this.parent.$$('nav#main-nav > ul.list-nav-links > li > a');
    }

    // ###
    get childElementsNoParent() {
        return $$('#main-nav>ul>li');
    }
    get useCasesElements() {
        return $$('div#main_b_footer_second_block>ul>li');
    }

    ////////////
    get getTextForLi() {
        return this.childElements.filter(element => {
            console.log('parents child: ' + element.getText());  // not getting the text of child elements
        })
    }
    
    get getTextForLiNoParent() {
        return this.childElementsNoParent.map(element => {
            console.log('NOO-PARENT' + element.getText());
        })
    }

    get useCasesElementsText() {
        return this.useCasesElements.filter(element => {
            console.log('Use cases text: ' + element.getText());
        })
    }
}
module.exports = new BlazePage();