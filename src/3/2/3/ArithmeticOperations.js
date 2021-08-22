let showMathFunctions = (a,b) => {
    console.log(a + ' ' + b);
    console.log('power')
    console.log(Math.pow(a,b));
    console.log('round 0.6');
    console.log(Math.round(0.6));
    console.log('ceil 0.6');
    console.log(Math.ceil(0.6));
    console.log('flor 0.6');
    console.log(Math.floor(0.6));
    console.log('abs -5');
    console.log(Math.abs(-5));
    console.log('max');
    console.log(Math.max(a,b));
    console.log('min');
    console.log(Math.min(a,b));
    console.log('random');
    console.log(Math.random());
    console.log('PI');
    console.log(Math.PI);
    console.log('E');
    console.log(Math.E);
    console.log('sqrt ' + a);
    console.log(Math.sqrt(a));
    console.log(a**0.5);
    console.log('sqrt ' + b);
    console.log(Math.sqrt(b));
    console.log(b**0.5);
    console.log('pow ' + a + '1/3');
    console.log(Math.pow(a,1/3));
    console.log('pow ' + b + '1/3');
    console.log(Math.pow(b,1/3));
    console.log('sin 0');
    console.log(Math.sin(0));
    console.log('log 10');
    console.log(Math.log(10));
    console.log('math log 100 / Math.ln10');
    console.log(Math.log(100)/Math.LN10);
    console.log('exp ' + a);
    console.log(Math.exp(a))
};

const showDifferentValues = () => {
    console.log(' 0 / 0');
    console.log(0/0);
    console.log('100 ** 100_000_000_000');
    console.log(100 ** 100_000_000_000);
    console.log('1 / 100e100000000000');
    console.log(1 / 100e100000000000);
    console.log('-1 / 100e100000000000');
    console.log(-1 / 100e100000000000);
    console.log('1 / 0');
    console.log(1 / 0);
    console.log('-1 / 0');
    console.log(-1 / 0);
    console.log('Number.POSITIVE_INFINITY / Number.POSITIVE_INFINITY');
    console.log(Number.POSITIVE_INFINITY / Number.POSITIVE_INFINITY);
}

const differentValuesOperations = () => {
    let nanValue = Number.POSITIVE_INFINITY / Number.POSITIVE_INFINITY;
    console.log('nan');
    console.log(nanValue);
    console.log(' nan === nan');
    console.log(nanValue === nanValue);
    console.log(' nan !== nan');
    console.log(nanValue !== nanValue);
    console.log('Number.isNaN(nanValue)');
    console.log(Number.isNaN(nanValue));
    console.log('Number.isFinite(nanValue))');
    console.log(Number.isFinite(nanValue));

    let zero = 0;
    let negativeZero = -0;
    console.log('0 === -0');
    console.log(zero === negativeZero);
    console.log('1/0 === 1/-0');
    console.log(1/zero === 1/negativeZero);
}

module.exports.showMathSampleFunctions = showMathFunctions;
module.exports.showDifferentValues = showDifferentValues;
module.exports.differentValuesOperations = differentValuesOperations;