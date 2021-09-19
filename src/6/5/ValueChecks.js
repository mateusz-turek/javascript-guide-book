let object = {
    x: 1
}

const showValueChecks = () => {
    console.log("x" in object);
    console.log(object.hasOwnProperty("x"));
    console.log(object.propertyIsEnumerable("x"));
    // toString method
    console.log("toString" in object); // true
    console.log(object.hasOwnProperty("toString")); //false not own
    console.log(object.propertyIsEnumerable("toString")); // false it is not enumerable
}

module.exports = showValueChecks;