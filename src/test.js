const integerLiterals = require('./3/2/1/IntegerLiterals');
const floatingPointLiterals = require('./3/2/2/FloatPointLiterals');
const arithmeticOperations = require('./3/2/3/ArithmeticOperations');
const bigInt = require('./3/2/5/BigInt');
const dateAndTime = require('./3/2/6/DateAndTime');
const showLove = require('./3/3/intro');
const characterLiterals = require('./3/3/1/CharacterLiterals');
const showEscapeSequencesInCharacterLiterals = require('./3/3/2/EscapeSequencesInCharacterLiterals');
const showStringOperations = require('./3/3/3/StringOperations');
const showTemplateLiterals = require('./3/3/4/TemplateLiterals');
const regexShow = require('./3/3/5/regex');

integerLiterals();
floatingPointLiterals();
arithmeticOperations.showMathSampleFunctions(5,10);
arithmeticOperations.showDifferentValues();
arithmeticOperations.differentValuesOperations();
bigInt.showBigInt();
dateAndTime();
showLove();
characterLiterals();
showEscapeSequencesInCharacterLiterals();
showStringOperations();
showTemplateLiterals();
regexShow();

