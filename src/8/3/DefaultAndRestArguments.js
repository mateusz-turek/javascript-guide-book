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

const showRestArguments = () => {
    const functionWithRestArgumentsAsParameter = (...numbers) => {
        let sum = 0;
        numbers.forEach(digit => {
            let condition = !isNaN(digit);
            if (condition) {
                sum +=digit;
            }
        });
        return sum;
    }

    console.log(functionWithRestArgumentsAsParameter(1,2,34,5,12,1,123))
}

const showNestedFunctionWithVarargs = () => {
    function timed(f){
        return function (...args){
            console.log(`${f.name}`);
            let startTime = Date.now();
            try {
                return f(...args);
            }
            finally {
                console.log(`exit ${f.name} after ${Date.now()-startTime} ms`)
            }
        }
    }

    function benchmark(n){
        let sum = 0;
        for (let i = 1; i <= n ; i++) {
            sum += i;
        }
        return sum;
    }

    let something = timed(benchmark)(1000000);
    console.log(something);
}

module.exports.showDefaultParametersUsage = showDefaultParametersUsage;
module.exports.showRestArguments = showRestArguments;
module.exports.showNestedFunctionWithVarargs = showNestedFunctionWithVarargs;