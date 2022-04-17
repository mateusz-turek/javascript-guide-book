function* oneDigitPrimes() {
    yield 2;
    yield 3;
    yield 5;
    yield 7;
}

const seq = function* (from, to) {
    for (let i = from; i <= to; i++) yield i;
}

const objectWithGenerator = {
    x: 0, y: 2, z: 3,

    * g() {
        for (let key of Object.keys(this)) {
            yield key
        }
    },

    * [Symbol.iterator]() {
        for (let i = this.x; i <= this.z; i++) {
            yield `${i}`
        }
    }
}

function* fibonacciSequence(n) {
    let x = 0, y = 1;
    for (; ;) {
        yield y;
        [x, y] = [y, x + y];
    }
}

function fibonacci(n) {
    for (let f of fibonacciSequence()){
        if (n-- <= 0) return f;
    }
}

function* take(n, iterable){
    let it = iterable[Symbol.iterator]();
    while (n-- > 0){
        let next = it.next();
        if (next.done) return;
        else yield next.value;
    }
}

function* zip(...iterables){
    let iterators = iterables.map(i => i[Symbol.iterator]());
    let index = 0;
    while (iterators.length > 0){
        if (index >= iterators.length){
            index = 0;
        }
        let item = iterators[index].next();
        if (item.done){
            iterators.splice(index,1);
        } else {
            yield item.value;
            index++;
        }
    }
}

function* sequence(...iterables){
    for (let iterable of iterables){
        yield* iterable;
    }
}

function * oneAndDone (){
    yield 1;
    return "done";
}

const showGeneratorFunctions = () => {
    let primes = oneDigitPrimes();
    console.log(primes.next())
    console.log(primes.next())
    console.log(primes.next())
    console.log(primes.next())
    console.log(primes.next())
    console.log(primes.next())
    console.log(...oneDigitPrimes())
    console.log(...seq(3, 5))
    console.log(...objectWithGenerator.g())
    console.log(...objectWithGenerator[Symbol.iterator]())
    console.log(fibonacci(20))
    console.log([...take(5,fibonacciSequence())]);
    console.log([...zip(oneDigitPrimes(),"ab",[0])]);
    console.log([...sequence(oneDigitPrimes(),"abc")]);
    console.log([...oneAndDone()])
}

showGeneratorFunctions();