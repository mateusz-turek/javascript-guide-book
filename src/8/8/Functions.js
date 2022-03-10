const sum = (x, y) => {
    return x + y;
}

const square = (x) => {
    return x * x
}
const showMapReduce = () => {
    let integers = [1, 1, 3, 5, 5];
    let mean = integers.reduce(sum) / integers.length;
    console.log(mean)
    let deviations = integers.map(x => x - mean);
    console.log(deviations);
    let stddev = Math.sqrt(deviations.map(square).reduce(sum) / integers.length - 1);
    console.log(stddev);
}

const showHigherOrderFunctions = () => {
    const map = function (a, ...args) {
        return a.map(...args);
    };

    function not(f) {
        return function (...args) {
            let result = f.apply(this, args);
            return !result;
        }
    }

    const even = x => x % 2 === 0;

    const odd = not(even);

    console.log([1, 3, 3, 5].every(odd))
    console.log([1, 2, 2, 5].every(odd))

    function mapper(f) {
        return a => map(a, f);
    }

    const increment = x => x + 1

    const incrementAll = mapper(increment)

    console.log(incrementAll([1, 2, 3]))

    function compose(f, g) {
        return function (...args) {
            return f.call(this, g.apply(this, args))
        }
    }

    const sum = (...args) => {
        let sum = 0;
        args.forEach(element => {
            sum += element
        });
        return sum
    }
    const square = x => x * x

    console.log(compose(square, sum)(1, 2, 3, 4))
}

const showPartialFunctionUsage = () => {

    function partialLeft(f, ...outerArgs) {
        return function (...innerArgs) {
            let args = [...outerArgs, ...innerArgs];
            return f.apply(this, args);
        }
    }

    function partialRight(f, ...outerArgs) {
        return function (...innerArgs) {
            let args = [...innerArgs, ...outerArgs]
            return f.apply(this, args);
        }
    }

    function partial(f, ...outerArgs) {
        return function (...innerArgs) {
            let args = [...outerArgs];
            let innerIndex = 0;
            for (let i = 0; i < args.length; i++) {
                if (args[i] === undefined) args[i] = innerArgs[innerIndex++];
            }
            args.push(...innerArgs.slice(innerIndex));
            return f.apply(this, args)
        }
    }

    const f = (x, y, z) => {
        return x * (y - z)
    }

    console.log(partialLeft(f, 2)(3, 4))
    console.log(partialRight(f, 2)(3, 4))
    console.log(partial(f, undefined, 2)(3, 4))

    const increment = partialLeft(sum,1)

    const cuberoot = partialRight(Math.pow,1/3);
    console.log(cuberoot(increment(26)))
}

const showMemoize = () => {

    function memoize (f) {
        const cache = new Map();
        return function (...args){
            let key = args.length + args.join("+");
            if (cache.has(key)){
                return cache.get(key)
            } else {
                let result = f.apply(this,args);
                cache.set(key,result);
                return result;
            }
        }
    }

    function gcd(a,b){
        if (a < b) {
            [a,b] = [b,a]
        }
        while (b !== 0){
            [a,b] = [b,a%b];
        }
        return a;
    }

    const gcdmemo = memoize(gcd);
    console.log(gcdmemo(85,187));

    const factorial = memoize(function (n){
       return (n <= 1) ? 1: n * factorial(n-1)
    });

    console.log(factorial(5))
}

showMemoize();

showPartialFunctionUsage();

showHigherOrderFunctions();

showMapReduce()