const showFalsyValues = () => {
    let undefined;
    let nullObject = null;
    let zero = 0;
    let negativeZero = -0;
    let nan = Number.POSITIVE_INFINITY / Number.POSITIVE_INFINITY;
    let emptyString = '';
    let falsyArray = [];
    falsyArray.push(undefined, nullObject, zero, negativeZero, nan, emptyString);
    falsyArray.forEach((element) => {
        console.log(element + ' === true  => ' + (element === true));
    });
}

module.exports = showFalsyValues;