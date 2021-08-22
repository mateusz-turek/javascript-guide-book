const showEscapeSequencesInCharacterLiterals = () => {
    let mcDonald = 'McDonald\'s'
    console.log(mcDonald);
    let nullCharacter = '\u0000'; // or '\0'
    console.log('abc' + nullCharacter + 'abc');
    console.log(nullCharacter.length);
    let deleteCharacter = '\u0008'; // or '\b'
    console.log('abc' + deleteCharacter + 'abc');
    console.log(deleteCharacter.length);
    let horizontalTab = '\u0009'; // or '\t'
    console.log('abc' +horizontalTab + 'abc');
    let newLine = '\u000A'; // \n
    console.log('abc' +newLine + 'abc');
    let verticalTab = '\u000B'; // '\v'
    console.log('abc' +verticalTab + 'abc');
    let idk = '\u000C';
    console.log('abc' +idk + 'abc');
    let carriageReturn = '\u000D'; // '\r'
    console.log('abc' +carriageReturn + 'abc');
    let unicodeWithNN = '\xAA'; // \'xnn'
    console.log(unicodeWithNN);
    let unicodeWithNNNN = '\uAA12'; // \'unnnn'
    console.log(unicodeWithNNNN)
    let unicodeWithBracket = '\u{1f600}'; // \'u{nnnn}'
    console.log(unicodeWithBracket);
}

module.exports = showEscapeSequencesInCharacterLiterals;