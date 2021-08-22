const showTemplateLiterals = () => {
    let name = 'sample name';
    let greeting = `hello, ${ name }.`;
    console.log(greeting);

    console.log(`raw \n`.length);
    let stringRaw = String.raw`raw \n`;
    console.log(stringRaw);
    console.log(stringRaw.length);
    console.log(`raw \n`.length === String.raw`raw \n`.length);
}

module.exports = showTemplateLiterals;