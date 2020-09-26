function practicePage(){
    this.shop= element(by.css("li:nth-child(2)"));
    this.add= element(by.css("button[class='btn btn-info']"));
    this.Check= element(by.css("a[class='nav-link btn btn-primary']"));
    this.Check1= element(by.css("button[class='btn btn-success']"));
    this.location= element(by.id('country'));
    this.select= element(by.css("div[class='suggestions']")).all(by.tagName('ul')).get(0);
    this.purchase= element(by.css("input[class='btn btn-success btn-lg']"));
};
module.exports = new practicePage();