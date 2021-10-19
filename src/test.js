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
const showFalsyValues = require('./3/4/falsy');
const symbols = require('./3/6/Symbols');
const mutableAndImmutable = require('./3/8/MutableAndImmutable');
const typesConversion = require('./3/9/TypesConversion');
const showDestructuring = require('./3/10/Destructuring');
const showConditionalAccess = require('./4/4/ConditionalAccessToProperty');
const showInUsage = require('./4/9/inAndInstanceOf');
const showAndOperatorDifferentUsage = require('./4/10/LogicalOperatorsOtherUsage');
const showEvalExample = require('./4/12/evalExample');
const showDoubleQuotationMarkUsage = require('./4/13/DoubleQuestionMarkOperator');
const loops = require('./5/4/loops');
const labels = require('./5/5/labels');
const withUsage = require('./5/6/withInstruction');
const debuggerUsage = require('./5/6/debuggerUsage');
const showCreatingObjects = require('./6/2/CreatingObjects');
const showValueChecks = require('./6/5/ValueChecks');
const methodInsideObject = require('./6/9/objectsWithMethods');
const showObjectExamples = require('./6/10/ObjectsExamples');
const showStretchOperatorUsage = require('./6/10/StretchOperator');
const showMethodUsage = require('./6/10/ObjectsWithMethods');
const objectsWithAccessors = require('./6/10/ObjectsWithGetterSetter');
const showArrayCreation = require('./7/1/ArrayCreation');
const showArrayIterationMethods = require('./7/8/IterationMethods');
const showFlatMethodUsage = require('./7/8/FlatAndFlatMap');
const pushPopShiftUnshift = require('./7/8/PushPopShiftUnshift');
const sliceSpliceFillCopy = require('./7/8/SliceSpliceFillCopyWithin');
const searchingAndSortingMethods = require('./7/8/SearchingAndSortingMethods');
const join = require('./7/8/JoinAndStaticFunctions');
const thisIssue = require('./8/2/This');
const functionParameters = require('./8/3/DefaultArguments');

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
showFalsyValues();
symbols();
mutableAndImmutable();
typesConversion.someConversions();
typesConversion.comparingWithDoubleEqualitySymbol();
typesConversion.differentSystemConversion();
typesConversion.toNumberConversion();
typesConversion.toStringAndValueOf();
showDestructuring();
showConditionalAccess();
showInUsage.InUsage();
showInUsage.InstanceOfUsage();
showAndOperatorDifferentUsage();
showEvalExample();
showDoubleQuotationMarkUsage();
loops.showForLoopWithManyVariables();
loops.showForOfExample();
loops.showForInExample();
labels.labelUsage();
withUsage();
debuggerUsage();
showCreatingObjects();
showValueChecks();
methodInsideObject();
showObjectExamples();
showStretchOperatorUsage();
showMethodUsage();
objectsWithAccessors.gs1();
objectsWithAccessors.gs2();
showArrayCreation.createArrayWithArrayFrom();
showArrayCreation.createArrayWithArrayOf();
showArrayCreation.createArrayWithConstructor();
showArrayCreation.createArrayWithLiteral();
showArrayCreation.createArrayWithStretch();
showArrayIterationMethods.showFilterMethod();
showArrayIterationMethods.showForEachMethod();
showArrayIterationMethods.showMapMethod();
showArrayIterationMethods.showFindIndexMethod();
showArrayIterationMethods.showFindMethod();
showArrayIterationMethods.showSomeMethod();
showArrayIterationMethods.showEveryMethod();
showArrayIterationMethods.showReduce();
showArrayIterationMethods.showReduceRight();
showFlatMethodUsage.showFlatWithDifferentLevels();
showFlatMethodUsage.showFlatMap();
showFlatMethodUsage.showConcat();
pushPopShiftUnshift.showPush();
pushPopShiftUnshift.showPop();
pushPopShiftUnshift.showUnshift();
pushPopShiftUnshift.showShift();
sliceSpliceFillCopy.showSlice();
sliceSpliceFillCopy.showSplice();
sliceSpliceFillCopy.showFill();
sliceSpliceFillCopy.showCopyWithin();
searchingAndSortingMethods.showIndexOf();
searchingAndSortingMethods.showIncludes();
searchingAndSortingMethods.showSort();
searchingAndSortingMethods.showReverse();
join.showJoin();
thisIssue.showThisIssue();
functionParameters.showDefaultParametersUsage();


