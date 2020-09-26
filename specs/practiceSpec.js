const { browser } = require("protractor");

describe('protoCommerce Screen', function() {
    var obj = require ("../pages/practicePage.js");
    it('practice', function() {

        
        browser.get('https://qaclickacademy.github.io/protocommerce/');

    
      obj.shop.click();
      obj.add.click();
      obj.add.click();
      obj.Check.click();
      obj.Check1.click();
      obj.location.sendKeys("Be");
      obj.select.click();
      obj.purchase.click();
      obj.agree.click();
browser.sleep(5000);
    });
});