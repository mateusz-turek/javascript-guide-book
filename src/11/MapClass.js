const showMap = () => {
    let m = new Map();
    let n = new Map([
        ["jeden",1],
        ["dwa",2]
    ]);
    let o = {x: 1, y: 2}
    let p = new Map(Object.entries(o));
    p.set('z',3);
    console.log(m)
    console.log(n)
    console.log(p)
    console.log(p.has('z'))
    console.log(p.has('x'))
    console.log(p.has('y'))
    console.log(p.has('a'))
}

showMap();