const SOME_VARIABLE = 'p1';
function computePropertyName() {
    return "p" + 2;
}
const SYMBOL_PROPERTY = Symbol('someSymbol');

let o = {
    SYMBOL_PROPERTY: {
        data: 1
    }
};
o[SOME_VARIABLE] = 1;
o[computePropertyName()] = 2;

const showObjectExamples = () => {
    console.log(SOME_VARIABLE in o);
    console.log(o[SOME_VARIABLE]);
    console.log(o.p1);
    console.log(o.p2);
    console.log(o.p1 + o.p2);
    console.log(o.SYMBOL_PROPERTY);
}

module.exports = showObjectExamples;