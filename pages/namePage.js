function namePage(){
    this.input1 = element(by.name('name'));
    this.input2 = element(by.name('email'));
    this.shop= element(by.css("li:nth-child(2)"));
    this.add= element(by.css("button[class='btn btn-info']"));
    this.assertion1=function(){
element(by.css("div[class*='alert']")).getText().then(function(result){
    expect(result).toBe("Name should be at least 2 characters");
});

}
this.assertion2=function(){
    element(by.css("div[class*='alert']")).getText().then(function(result){
        expect(result).toBe("Name is required");
    });
    
    }
    this.assertion3=function(){
        element(by.css("a[class='nav-link btn btn-primary']")).getText().then(function(result){
            expect(result).toContain("Checkout ( 2 )");
        });
        
        }
       /* this.assertion3=function(){
            element(by.css("a[class='nav-link btn btn-primary']")).getText().then(function(result){
                console.log(result);
            });
        };*/
};
module.exports = new namePage();
