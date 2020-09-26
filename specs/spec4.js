describe('Test', function() {
    it('open julie', function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://www.google.com');
        element(by.css("input[class='gLFyf gsfi']")).sendKeys('search text');
        browser.sleep(10000);
        element(by.css("input[class='gNO89b']")).click();
        
        
        browser.waitForAngularEnabled(true);
browser.get('http://juliemr.github.io/protractor-demo');

element(by.model('first')).sendKeys(3);
element(by.model('second')).sendKeys(4);
element(by.id('gobutton')).click();
expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("7");

});
});