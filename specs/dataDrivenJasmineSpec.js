var using = require('jasmine-data-provider');

describe('Test', function() {
    var jasmineData= require("../data/dataJasmine.js");
    using(jasmineData.data, function(dataSet,description){
    it('open julie', function() {
browser.get('http://juliemr.github.io/protractor-demo');

element(by.model('first')).sendKeys(dataSet.firstInput);
element(by.model('second')).sendKeys(dataSet.secondInput);
element(by.id('gobutton')).click();
expect(element(by.css("h2[class='ng-binding']")).getText()).toBe(dataSet.result);

});
});
});