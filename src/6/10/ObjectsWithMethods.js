const METHOD_NAME = 'name';
const METHOD_NAME_AS_SYMBOL = Symbol('name');

let methods = {
    [METHOD_NAME](x) {return x+10},
    [METHOD_NAME_AS_SYMBOL](x){return x+2}
}

const showMethodInsideObject = () => {
    console.log(methods[METHOD_NAME](10));
    console.log(methods[METHOD_NAME_AS_SYMBOL](10));
}

module.exports = showMethodInsideObject;