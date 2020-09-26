const { browser } = require("protractor");

describe('protoCommerce Screen', function() {
    var obj = require ("../pages/namePage.js");
    it('Name Assertion', function() {

        
        browser.get('https://qaclickacademy.github.io/protocommerce/');

      obj.input1.sendKeys("");
     obj.input2.sendKeys("");
     obj.assertion2();
     obj.input1.sendKeys("m");
      obj.assertion1();
      obj.shop.click();
      obj.add.click();
      obj.add.click();
      obj.assertion3();
      
browser.sleep(5000);
    });
});
