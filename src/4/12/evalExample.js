const showEvalExample = () => {
    eval("let x = 1; console.log(x);");
    let outcome = eval("function f() {let x; x = 1; return x+1} f()");
    eval("global.f2 = () => {let x2; x2 = 1; return x2+1}");
    console.log(outcome);
    console.log(global.f2());
    let x = "global";
    global.y = "global";
    const globalEval = eval;
    function localCall() {
        let x = 'local';
        eval("x += 'changed';");
        return x;
    }
    function globalCall() {
        let y = 'local';
        globalEval("global.y += 'changed'");
        return y;
    }

    console.log(localCall());
    console.log(globalCall());
    console.log(global.y);
}

module.exports = showEvalExample;