let array = [];
let string = '';
let object = {
    prop1: 'asd',
    num: 1,
    bool: true
}

const showForLoopWithManyVariables = () => {
    for (let i = 0, j = 1, k = 2 ; i < 10; i++, j++, k++ ){
        console.log(i);
        console.log(j);
        console.log(k);
        array.push(i,i+j, i+j+k);
        string +=i+j+k;
    }
}

const showForOfExample = () => {
    let sum = 0;
    for (let element of array) {
        sum += element;
    }
    console.log(sum);

    for (let property of Object.keys(object)){ //objects not iterable or for in
        console.log(property);
    }

    console.log(string)
    for (let char of string){
        console.log(char);
    }
}

const showForInExample = () => {
    for (let property in object){
        console.log(property);
    }
}

module.exports.showForLoopWithManyVariables = showForLoopWithManyVariables;
module.exports.showForOfExample = showForOfExample;
module.exports.showForInExample = showForInExample;