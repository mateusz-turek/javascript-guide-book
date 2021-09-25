let array = [0,1,2,3,4,5,6,7,8,9,10,'a','b',NaN];

const showIndexOf = () => {
    console.log(array.indexOf('a'));
}

const showIncludes = () => {
    console.log(array.includes('z'));
    console.log(array.includes(NaN));
}

const showSort = () => {
    console.log(array.sort());
    let sortedDigitArray = [];
    array.forEach(element => {
        if (typeof element === 'number'){
            sortedDigitArray.push(element)
        }
    });
    console.log(sortedDigitArray);
    sortedDigitArray.sort(function (a,b) {
        return a-b;
    });
    console.log(sortedDigitArray);
}

const showReverse = () => {
    console.log(array.reverse());
}

module.exports.showIndexOf = showIndexOf;
module.exports.showIncludes = showIncludes;
module.exports.showSort = showSort;
module.exports.showReverse = showReverse;