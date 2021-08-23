const symbolsExample = () => {
    let strName = 'string name';
    let symName = Symbol('propertyName');
    console.log(typeof strName);
    console.log(typeof symName);
    let object = {};
    object[strName] = 1;
    object[symName] = 2;
    console.log(object);
    console.log('===================================================');

    let s = Symbol.for("shared");
    let t = Symbol.for("shared");
    console.log(s === t);
    console.log(s.toString());
    console.log(t.toString());
    console.log(Symbol.keyFor(t));
    console.log(Symbol.keyFor(s));

    console.log('===================================================');
    let x = Symbol('notShared');
    let y = Symbol('notShared');
    console.log(y === x);
    console.log(x.toString());
    console.log(y.toString());
    console.log(Symbol.keyFor(y));
    console.log(Symbol.keyFor(x));
}

module.exports = symbolsExample;