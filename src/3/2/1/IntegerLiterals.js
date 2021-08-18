let variable;

function showIntegerLiterals(){
    console.log('hexadecimal numbers');
    console.log('prefix 0x: 0xff');
    variable = 0xff;
    printLiteral(variable);
    variable = 0xBADCAFE;
    printLiteral(variable);
    console.log('=============================================');
    console.log('binary numbers');
    console.log('prefix 0b: 0xff');
    variable = 0b10101;
    printLiteral(variable);
    console.log('=============================================');
    console.log('octal numbers');
    console.log('prefix 0o: 0o377');
    variable = 0o377;
    printLiteral(variable);
}

function printLiteral(literal){
    console.log(literal);
    console.log(literal.toString());
}

module.exports =  showIntegerLiterals;
module.exports.objectExport = showIntegerLiterals;