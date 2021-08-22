
const showBigInt = () => {
    let variable;
    console.log('big int has  n suffix');
    console.log( '1n');
    variable = 1n;
    console.log(variable);
    console.log('typeof 1n');
    console.log(typeof variable);
    let bigIntMacSafeInteger = BigInt(Number.MAX_SAFE_INTEGER);
    console.log(bigIntMacSafeInteger);
}

module.exports.showBigInt = showBigInt;