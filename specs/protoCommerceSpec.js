var using = require('jasmine-data-provider');

describe('protoCommerce Screen', function() {
    var proCom = require ("../pages/protoCommercePage.js");
    it('Input Submit Assertion', function() {

        
        browser.get('https://qaclickacademy.github.io/protocommerce/');

      proCom.input1.sendKeys("Maan");
      proCom.input2.sendKeys("Maanbtaddiny@gmail.com");
      proCom.input3.sendKeys("123456");
      proCom.input4.click();
      proCom.select1.click();
      proCom.select2.click();
      proCom.input5.sendKeys("05/08/1990");
      proCom.submit.click();
      browser.sleep(5000);
      


      


        
    });
               });