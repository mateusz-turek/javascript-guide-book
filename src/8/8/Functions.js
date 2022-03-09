const sum = (x, y) => {
    return x + y;
}

const square = (x) => {
    return x * x
}
const showMapReduce = () => {
    let integers = [1, 1, 3, 5, 5];
    let mean = integers.reduce(sum)/integers.length;
    console.log(mean)
    let deviations = integers.map(x => x-mean);
    console.log(deviations);
    let stddev = Math.sqrt(deviations.map(square).reduce(sum)/integers.length-1);
    console.log(stddev);
}

showMapReduce()