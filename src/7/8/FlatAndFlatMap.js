let nestedArrays = [1,10,15,[2,[3,[4]]]];
let secondNestedArray = [30,40,[50,60,[70,80]]];

const showFlatWithDifferentLevels = () => {
    console.log(nestedArrays);
    let flatWithoutParams = nestedArrays.flat(1);
    console.log(flatWithoutParams);
    let flatWithTwoAsParam = nestedArrays.flat(2);
    console.log(flatWithTwoAsParam);
}

const showFlatMap = () => {
    let output = secondNestedArray.flatMap( integer => integer/10);
    let output2 = secondNestedArray.flat();
    console.log(output);
    console.log(output2);
    let output3 = output2.flatMap(integer => integer/10);
    console.log(output3);
}

const showConcat = () => {
    let a = [1,2,3];
    console.log(a.concat([5,6,[2,5]]));
}

module.exports.showFlatWithDifferentLevels = showFlatWithDifferentLevels;
module.exports.showFlatMap = showFlatMap;
module.exports.showConcat = showConcat;