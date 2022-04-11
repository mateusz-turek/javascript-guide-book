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

showRegExp();