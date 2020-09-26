describe('Test', function() {
    it('open julie', function() {
browser.get('http://juliemr.github.io/protractor-demo');

element(by.model('first')).sendKeys(3);
element(by.model('second')).sendKeys(4);
element(by.css("option[value='MULTIPLICATION']")).click();
element(by.id('gobutton')).click();
element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(result){
    console.log(result);
    browser.sleep(5000);
});

    });
});