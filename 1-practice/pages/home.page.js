class HomePage {
    get pageHeader() {
        return $('h1');
    }
    get subHeading() {
        return $('div.banner-text-content > p.sub-text');
    }
    get platformLink() {
        return $("//a[text()='Platform']");
    }
}

module.exports = new HomePage();