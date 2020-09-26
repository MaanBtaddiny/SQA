function protoCommercePage(){
    this.input1 = element(by.name('name'));
    this.input2 = element(by.name('email'));
    this.input3= element(by.css("input[class='form-control']"));
    this.input4= element(by.css("input[class='form-check-input']"));
    this.select1= element(by.css("option:nth-child(1)"));
    this.select2= element(by.css("input[value='option2']"));
    this.input5 = element(by.name('bday'));
    this.submit= element(by.css("input[class='btn btn-success']"));

    
};
module.exports = new protoCommercePage();
