const showThreeWaysOfCreatingObjects = () => {
    let objectLiteral = {
        "main title": "sth",
        for: "sth2"
    }
    let objectNew = new Object({prop:1});
    let objectCreate = Object.create({prop1: 1, prop2: 2}); //no toString
    let array = [];
    array.push(objectLiteral, objectCreate, objectNew);
    console.log(array);
}

module.exports = showThreeWaysOfCreatingObjects;