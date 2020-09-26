describe('Test', function() {
    function add(a,b,o){
        
        element(by.model('first')).sendKeys(a);
element(by.model('second')).sendKeys(b);
element.all(by.tagName('option')).each(function(result){
    result.getAttribute('value').then(function(values){
        if(values == o)
        {
            result.click();
            
            
        }
    });


});
element(by.id('gobutton')).click();
    }; 
    it('open julie', function() {
browser.get('http://juliemr.github.io/protractor-demo');
add(3,4,'MULTIPLICATION');
add(5,6,'DIVISION');
add(1,8,'ADDITION');
element.all(by.tagName('option')).each(function(result){
    result.getAttribute('value').then(function(values){
        console.log(values);


});
});
    });
});