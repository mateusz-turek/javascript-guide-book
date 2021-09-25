let emptyArray = []
let arrayWithOne = [1];
let shiftArray = [4,5,6,7,8];

const showPush = () => {
    let updatedArrayLength = emptyArray.push(1,2,3,4,5);
    console.log(updatedArrayLength);
    console.log(emptyArray);
}

const showPop = () => {
    let updated = arrayWithOne.pop();
    console.log(updated);
    console.log(arrayWithOne);
}

const showUnshift = () => {
    let updated = shiftArray.unshift(1,2,3);
    console.log(updated);
    console.log(shiftArray);
}

const showShift = () => {
    let updated = shiftArray.shift();
    console.log(updated);
    console.log(shiftArray);
}

module.exports.showPush = showPush;
module.exports.showPop = showPop;
module.exports.showUnshift = showUnshift;
module.exports.showShift = showShift;
