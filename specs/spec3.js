describe('Test', function() {
    it('open julie', function() {
browser.get('http://juliemr.github.io/protractor-demo');

element(by.model('first')).sendKeys(3);
element(by.model('second')).sendKeys(4);
element(by.id('gobutton')).click();
expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("7");

});
});