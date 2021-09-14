const showInUsage = () => {
    let point = {x:1 , y:2}
    console.log("x" in point);
    console.log("y" in point);
    console.log('y' in point);
    console.log('z' in point);
}

const showInstanceOfUsage = () => {
    let date = new Date();
    console.log(date instanceof Date);
    console.log(date instanceof Object);
    console.log(date instanceof Number);
}

module.exports.InUsage = showInUsage;
module.exports.InstanceOfUsage = showInstanceOfUsage;

//sth