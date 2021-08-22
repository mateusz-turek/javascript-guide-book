const showSurrogatePair = () => {
    let love = "\ud83d\udc99";
    console.log(love + ' single character of Unicode represented by 2 length string');
    console.log(love.length);
}

module.exports = showSurrogatePair;