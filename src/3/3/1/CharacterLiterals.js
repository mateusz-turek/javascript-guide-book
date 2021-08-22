const showCharacterLiterals = () => {
    let apostrophes;
    let quotations;
    let engravings;
    console.log('to save string type within: " or \' or `');
    apostrophes = 'apostrophes';
    quotations = "quotations";
    engravings = `engravings`
    let stringArray = [];
    stringArray.push(apostrophes, quotations, engravings);
    console.log(stringArray);
    let mix = `sth: "sth in quotations 'sth in apostrophes'"`;
    console.log(mix);
}

module.exports = showCharacterLiterals;