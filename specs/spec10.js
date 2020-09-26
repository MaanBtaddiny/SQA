describe('Test', function() {
    function add(a,b){
        element(by.model('first')).sendKeys(a);
element(by.model('second')).sendKeys(b);
element(by.id('gobutton')).click();
    }
    it('open julie', function() {
browser.get('http://juliemr.github.io/protractor-demo');

add(3,4);
add(5,6);
add(1,8);
element.all(by.repeater('result in memory')).count().then(function(result){
    console.log(result);
});

element.all(by.repeater('result in memory')).each(function(answer){
    answer.element(by.css("td:nth-child(3)")).getText().then(function(results){
        console.log(results);
    });
});
element.all(by.repeater('result in memory')).get(2).element(by.css("td:nth-child(3)")).getText().then(function(result){

    console.log(result);
});
browser.sleep(5000);
});
});