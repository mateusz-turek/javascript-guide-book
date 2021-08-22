
const showFloatPointLiterals = () => {
    console.log('========================================3.2================================================')
    let number = .3333;
    console.log(number);
    number = 6.02e23;
    console.log(number);
    number = 1.47738223E-32;
    console.log(number);
    console.log('separators');
    number = 1_000_000_000;
    console.log(number);
    number = 0x89_AB_CD_EF;
    console.log(number);
    number = 0b0001_1101_0111;
    console.log(number);
    number = 0.123_456_789;
    console.log(number);
}

module.exports = showFloatPointLiterals;