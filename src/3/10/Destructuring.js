const showDestructuring = () => {
    let [x,y] = [1,2];
    [x,y] = [x+1, y+2];
    console.log([x,y]);

    [x,y] = [1];
    console.log([x,y]);

    let [a, ...b] = [1,2,3,4,5,6];
    console.log([a,b]);

    let [first, ...rest] = 'something';
    console.log([first, rest]);
}

module.exports = showDestructuring;