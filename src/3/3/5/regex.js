const regexShow = () => {
    let htmlPattern = /^HTML/ ;
    console.log(htmlPattern);
    let digitPattern = /^[1-9][0-9]*/;
    let hasDigitPatter = /\d+/g;
    console.log(digitPattern);
    let string = 'HTML1233ML12 34';
    console.log(htmlPattern.test(string));
    console.log(digitPattern.test(string));
    console.log(hasDigitPatter.test(string));
    console.log(string.search(hasDigitPatter)); // has4 returns 4
    let digitsFromString = string.match(hasDigitPatter);
    console.log(digitsFromString);
    let newString = string.replace(hasDigitPatter, ",");
    console.log(newString);
    let splitString = string.split(/\D+/);
    console.log(splitString);
}

module.exports = regexShow;