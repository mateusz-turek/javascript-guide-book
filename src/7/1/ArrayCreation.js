const createArrayWithLiteral = () => {
    let array = [];
    console.log(array);
}

const createArrayWithStretch = () => {
    let arrayOne = [1,2,3];
    let arrayTwo = [1, ...arrayOne, 2];
    console.log(arrayOne);
    console.log(arrayTwo);
}

const createArrayWithConstructor = () => {
    let array = new Array();
    let arrayWithLength = new Array(10);
    console.log(arrayWithLength.length);
}

const createArrayWithArrayOf = () => {
    let arrayWithOnePosition = Array.of(10);
    console.log(arrayWithOnePosition);
}

const createArrayWithArrayFrom = () => {
    let string = 'asdadadasd';
    let arrayFromString = Array.from(string);
    console.log(arrayFromString);
}

module.exports.createArrayWithArrayFrom = createArrayWithArrayFrom;
module.exports.createArrayWithArrayOf = createArrayWithArrayOf;
module.exports.createArrayWithConstructor = createArrayWithConstructor;
module.exports.createArrayWithStretch = createArrayWithStretch;
module.exports.createArrayWithLiteral = createArrayWithLiteral;