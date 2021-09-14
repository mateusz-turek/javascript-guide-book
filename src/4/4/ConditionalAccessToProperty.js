const showConditionalAccess = () => {
    let object = {
        name: 'sample name',
        lastname: 'sample lastname',
        things : [
            'car',
            'house'
        ],
        innerObject: {
            something: 37,
            something2: 12
        }
    }
    console.log(object.valueOf());

    console.log(object?.name);
    console.log(`object?.notName.something => type Error`);
    console.log(`object?.notName?.something => Undefined`);
    console.log(object?.notName?.something)

    let a;
    let index = 0;
    try {
        a[index++]
    }catch (error){
        index;
    }
    console.log(a?.[index]);
    console.log(index);
    //console.log(a[index++]);

    console.log('function condition');
    let argument = 5;
    let someFunction = (argument) => {
        console.log('some function called');
    }

    doFunctionIfPresent(argument,someFunction);
    doFunctionIfPresent(argument,null);
    doFunctionIfPresent();
}

function doFunctionIfPresent(argument, someFunction){
    if (someFunction && argument){
        someFunction?.(argument);
    }
    else if (argument){
        console.log(argument);
    }
}

module.exports = showConditionalAccess;
