const showRegExp = () => {
    let pattern = /s$/;
    let pattern3 = new RegExp(`[abc]`)
    let pattern4 = new RegExp(`abc`)
    let s = 'some string'
    let s1 = 'some abc strings'
    console.log(pattern3.test(s))
    console.log(pattern3.test(s1))
    console.log(pattern.test(s))
    console.log(pattern.test(s1))
    console.log(pattern4.test(s))
    console.log(pattern4.test(s1))
}

const showStringSearch = () => {
    let js = "JavaScript";
    let p = "Python";
    console.log(js.search(/script/ui));
    console.log(p.search(/script/ui));
}

const showStringReplace = () => {
    let js = "javascript javascript javascript javascript javascript javascript";
    console.log(js.replace(/javascript/gi,"JavaScript")); //gi flag replaces all matched  values
    console.log(js.replace(/javascript/,"JavaScript")); // replace first value
}

const showStringMatch = () => {
    let js = "javascript javascript javascript javascript javascript javascript";
    console.log(js.match(/javascript/gi));
    console.log(js.match(/javascript/));
}

const showStringSplit = () => {
    let js = "1, 2, 3, 6, 7  , 2, 8";
    console.log(js.split(/\s*,\s*/gi));
}

showStringSplit()

showStringMatch();

showStringReplace();

showStringSearch();

showRegExp();