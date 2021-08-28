const showSomeConversion = () => {
    let nullVariable = null;
    console.log('null to string conversion :');
    console.log(String(nullVariable));
    console.log('null to number conversion :');
    console.log(Number(nullVariable));
    let emptyString = '';
    console.log('emptyString to boolean conversion :');
    console.log(Boolean(emptyString));
    console.log('emptyString to number conversion :');
    console.log(Number(emptyString));
    let notEmptyString = 'something';
    console.log('notEmptyString to number conversion :');
    console.log(Number(notEmptyString))
    let nan = Number(notEmptyString);
    console.log('Nan to boolean');
    console.log(Boolean(nan));
    let emptyArray = [];
    console.log('emptyArray to boolean');
    console.log(Boolean(emptyArray));
    let someFunction = () => {
        console.log('some function');
    }
    console.log('some function to number');
    console.log(Number(someFunction));
    console.log('some function to boolean');
    console.log(Boolean(someFunction));
}

const comparingWithDoubleEqualitySymbol = () => {
    console.log('null == undefined');
    console.log(null == undefined);
    console.log(`0 == "0"`);
    console.log(0 == "0");
    console.log(`0 == false`);
    console.log(0 == false);
    console.log(`false == "0"`);
    console.log(false == "0");
}

const differentSystemConversion = () => {
    let number = 17;
    console.log(number + ` to "0b" "0o" "0x"`);
    console.log("0b"+number.toString(2));
    console.log("0o"+number.toString(8));
    console.log("0x"+number.toString(16));
}

const toNumberConversion = () => {
    let number = 123456.789
    console.log(number.toFixed(0));
    console.log(number.toFixed(2));
    console.log(number.toFixed(5));
    console.log(number.toExponential(1));
    console.log(number.toExponential(5));
    console.log(number.toExponential(8));
    console.log(number.toPrecision(5));
    console.log(number.toPrecision(7));
    console.log(number.toPrecision(9));
}

const toStringAndValueOf = () => {
    let object = {
        name: 'sample',
        name2 : 'sampleName',
        value: 123,
        innerObject : {
            name: 'samplename',
            name2: new Date(2021,2,21)
            }
        };
    console.log(object.toString());
    let date = new Date(2021,8,28);
    console.log(date.toString());
    console.log(date.valueOf());
    console.log(object.valueOf());
}

module.exports.someConversions = showSomeConversion;
module.exports.differentSystemConversion = differentSystemConversion;
module.exports.comparingWithDoubleEqualitySymbol = comparingWithDoubleEqualitySymbol;
module.exports.toNumberConversion = toNumberConversion;
module.exports.toStringAndValueOf = toStringAndValueOf;