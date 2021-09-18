const showLabelUsage = () => {
    label: for (let letter of ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','w','z']){
        for (let i = 0; i< 100; i++){
            console.log(letter+i);
            if (letter === 'c' && i === 2){
                break label;
            }
        }
    }
}

module.exports.labelUsage = showLabelUsage;