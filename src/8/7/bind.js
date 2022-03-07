const showBindUsage = () => {
    function f(y) {
        return this.x + y
    }
    console.log('f attributes \n');
    console.log('f.name');
    console.log(f.name);
    console.log('f.length');
    console.log(f.length);
    let o = {x: 1};
    let g = f.bind(o);
    console.log('g object: ' + g)
    g(2)
    console.log('g(2)')
    console.log(g(2));
    let p = {x: 5, g};
    p.g(2)
    console.log('p object')
    console.log(p)
    console.log(g(2));
    console.log('g(2)')
    console.log(g(2));
}


module.exports.showBindUsage = showBindUsage;
