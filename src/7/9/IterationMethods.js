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

module.exports.showForEachMethod = showForEachMethod;
module.exports.showMapMethod = showMapMethod;
module.exports.showFilterMethod = showFilterMethod;