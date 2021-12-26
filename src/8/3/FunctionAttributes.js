uniqueInteger.counter = 0;

function uniqueInteger() {
    return uniqueInteger.counter++;
}

const callUniqueInteger = () => {
    for (let i = 0; i < 100; i++) {
        uniqueInteger();
    }

    console.log(uniqueInteger.counter)
}

module.exports.uniqueIntegerCall = callUniqueInteger;