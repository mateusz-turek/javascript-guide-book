const showOtherUsageOfAndOperator = () => {
    let a = 1;
    let b = 1;
    let c = 2;

    let someFunction = () => {
        console.log('something')
    }

    let noneFunction = () => {
        console.log('nothing')
    }

    (a === b ) && someFunction();
    (a === c ) && noneFunction();
}

module.exports = showOtherUsageOfAndOperator;