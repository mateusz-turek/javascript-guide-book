
global.x = 10;
global.y = 5;
const showFunctionConstructor = (x, y) => {
    return new Function("return x+y");
}

console.log(showFunctionConstructor(1,2)());