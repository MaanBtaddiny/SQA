describe('Test', function() {
    it('open julie', function() {
browser.get('http://juliemr.github.io/protractor-demo');

element(by.model('first')).sendKeys(3);
element(by.model('second')).sendKeys(4);
element(by.id('gobutton')).click();
element(by.model('first')).sendKeys(5);
element(by.model('second')).sendKeys(6);
element(by.id('gobutton')).click();
element(by.model('first')).sendKeys(1);
element(by.model('second')).sendKeys(8);
element(by.id('gobutton')).click();
element.all(by.repeater('result in memory')).count().then(function(result){
    console.log(result);
});

element.all(by.repeater('result in memory')).each(function(answer){
    answer.element(by.css("td:nth-child(3)")).getText().then(function(results){
        console.log(results);
    });
});
browser.sleep(5000);
});
});