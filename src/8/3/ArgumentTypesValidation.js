const sum = (array) => {
    let sum = 0;
    for (let element of array){
        if (typeof element !== "number"){
            throw new TypeError('elements have to be numbers');
        } else {
            sum += element;
        }
    }
    return sum;
}

const showSumFunctionWithThrowableError = () => {
    let arrayWithNumbers = [ 1,2 ,3,4 ,5,6 ,7];
    let arrayWithString = [1,2,4,5, 'something' ,6,7,9]
    console.log(sum(arrayWithNumbers));
    try {
        console.log(sum(arrayWithString))
    } catch (error){
        console.log(error)
    }
}

module.exports.showSumFunctionWithThrowableError = showSumFunctionWithThrowableError