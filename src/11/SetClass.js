const showSetClass = () => {
    let s = new Set();
    console.log(s);
    let t = new Set([1,s]);
    let string = 'mmiiss';
    let unique = new Set(string);
    console.log(t);
    console.log(unique)
    console.log(unique.size)
    let array = [1,2,3,4,5,6];
    s.add(array);
    console.log(s);
    let arraySet = new Set(array);
    console.log(arraySet);
    arraySet.add(7)
    console.log(arraySet);
    arraySet.delete(1);
    console.log(arraySet);
    console.log(arraySet.delete(1));
    console.log(arraySet.delete(7));
    console.log(arraySet.has(7));
    console.log(arraySet.has(6));
    arraySet.forEach(element => {
        console.log(element)
    })
    array = [...arraySet];
    console.log(array)
    console.log(Array.isArray(array));
    console.log(Array.isArray(arraySet));
}

showSetClass();