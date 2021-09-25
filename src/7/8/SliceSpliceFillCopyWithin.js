let array = [0,1,2,3,4,5,6,7];
let copyWithinArray = [0,1,2,3,4,5,6,7];

const showSlice = () => {
    console.log(array);
    console.log('slice 0,3');
    console.log(array.slice(0,3));
    console.log('slice 3');
    console.log(array.slice(3));
    console.log('slice -3,-2');
    console.log(array.slice(-3,-2));
}

const showSplice = () => {
    let afterSplice = array.splice(4);
    console.log(afterSplice);
    console.log(array);
    let newSplice = array.splice(2,4,"b");
    console.log(newSplice);
    console.log(array);
}

const showFill = () => {
    let emptyArrayWithFiveLength = new Array(5);
    console.log(emptyArrayWithFiveLength);
    emptyArrayWithFiveLength.fill(0);
    console.log(emptyArrayWithFiveLength);
    emptyArrayWithFiveLength.fill(9,3);
    console.log(emptyArrayWithFiveLength);
}

const showCopyWithin = () => {
    let copied = copyWithinArray.copyWithin(2,5,7);
    console.log(copied);
    console.log(copyWithinArray);
}

module.exports.showSlice = showSlice;
module.exports.showSplice = showSplice;
module.exports.showFill = showFill;
module.exports.showCopyWithin = showCopyWithin;