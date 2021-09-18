let object = {
    name: 'samplename',
    lastname: 'sampleLastname',
    age: 22,
    anotherData : {
        one: 'asd',
        two: 'asdfg',
        three: 'as'
    }
}

const showWithUsage = () => {
    with (object.anotherData){
        console.log(one);
        console.log(two);
        console.log(three);
    }
}

module.exports = showWithUsage;