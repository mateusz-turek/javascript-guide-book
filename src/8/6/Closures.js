const showScope = () => {
    let scope = 'outer scope'
    function checkScope() {
        let scope = 'inner scope';
        function f() {
            return scope;
        }
        return f();
    }
    let output = checkScope()
    console.log(output)
}

const showScope2 = () => {
    let scope = 'outer scope'
    function checkScope() {
        let scope = 'inner scope';
        function f() {
            return scope;
        }
        return f;
    }
    let output = checkScope()()
    console.log(output)
}

module.exports.showScope = showScope;
module.exports.showScope2 = showScope2;