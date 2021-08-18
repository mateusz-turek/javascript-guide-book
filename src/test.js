const integerLiterals = require('./3/2/1/IntegerLiterals');

let helloWorld = 'hello world';
console.log(typeof helloWorld);
let sayHello = () => {
    console.log('function');
}
sayHello();
console.log(helloWorld);

integerLiterals();
integerLiterals.objectExport();