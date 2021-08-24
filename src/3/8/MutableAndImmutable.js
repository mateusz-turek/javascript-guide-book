const exampleOfMutableAndImmutable = () => {
    console.log('===============================Immutable===============================')
    let immutable = 'hey';
    immutable.toUpperCase();
    console.log(immutable);
    console.log('===============================Mutable===============================')
    let mutableObject = {x : 1};
    console.log(mutableObject);
    mutableObject.x = 2;
    mutableObject.y = 1;
    console.log(mutableObject);

    console.log('array');
    let mutableArray = [1,2,3];
    console.log(mutableArray);
    mutableArray[0] = 0;
    mutableArray[3] = 4;
    console.log(mutableArray);

    console.log('comparing mutable objects');
    let object1 = {x:1}, object2 = {x:1};
    console.log(object1);
    console.log(object2);
    console.log('compare');
    console.log(object1 === object2);
    console.log('same with arrays');

    console.log(`creating variable which "references" object1 and comparing them`)
    let referenceToObject1 = object1;
    console.log(referenceToObject1 === object1);
}

module.exports = exampleOfMutableAndImmutable;