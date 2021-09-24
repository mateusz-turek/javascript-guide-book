let array = [1,2,3,4,5,6,7,8,9,10];

const showForEachMethod = () => {
    let sum = 0;
    array.forEach(value => {
        sum += value;
    });
    console.log(sum);
}

const showMapMethod = () => {
    let outputArray = array.map(x => x*x);
    console.log(outputArray);
}

const showFilterMethod = () => {
    let outputArray = array.filter(x => x%2 ===0);
    console.log(outputArray);
}

const showFindIndexMethod = () => {
    let moduloSevenEqualsZeroIndex = array.findIndex(x => x%7 === 0);
    console.log(moduloSevenEqualsZeroIndex);
    console.log(array[moduloSevenEqualsZeroIndex]);
}

const showFindMethod = () => {
    let searchedNumber = array.find(x => x%2 ===0);
    console.log(searchedNumber);
}

const showEveryMethod = () => {
    let isEveryIntegerInArrayLowerThanTen = array.every(x => x <= 10);
    console.log(isEveryIntegerInArrayLowerThanTen);
}

const showSomeMethod = () => {
    let isInArrayNumberEqualEight = array.some( x => x === 8);
    console.log(isInArrayNumberEqualEight);
}

const showReduce = () => {
    let sumOfIntegers = array.reduce((x,y) => x + y, 0);
    console.log(sumOfIntegers);
    let multiplicationOfEveryInteger = array.reduce((x,y) => x*y,1);
    console.log(multiplicationOfEveryInteger);
}

const showReduceRight = () => {
    let sumOfIntegersFromRight = array.reduceRight((x,y) => x+y,0);
    console.log(sumOfIntegersFromRight);
    let toStringFromRight = array.reduceRight((x,y) => x+ ' ' + y,'string: ');
    console.log(toStringFromRight);
}

module.exports.showForEachMethod = showForEachMethod;
module.exports.showMapMethod = showMapMethod;
module.exports.showFilterMethod = showFilterMethod;
module.exports.showFindIndexMethod = showFindIndexMethod;
module.exports.showFindMethod = showFindMethod;
module.exports.showEveryMethod = showEveryMethod;
module.exports.showSomeMethod = showSomeMethod;
module.exports.showReduce = showReduce;
module.exports.showReduceRight = showReduceRight;