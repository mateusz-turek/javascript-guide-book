const showDefaultParametersUsage = () => {
    const f = function (arrayToStoreDestructedString = [], string = 'defaultString') {
        arrayToStoreDestructedString.push(... string);
        return arrayToStoreDestructedString;
    }

    console.log(f());
    console.log(f(['asdf']));
    console.log(f(['asdf'],'something'));

    const f2 = (width = 100, length = width*2) => {
        return {width: width, length: length}
    }

    console.log(f2())
    console.log(f2(1,5))
    console.log(f2(5))
}

module.exports.showDefaultParametersUsage = showDefaultParametersUsage;