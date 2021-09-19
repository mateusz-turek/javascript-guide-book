let position = {
    x: 0,
    y: 0
};

let dimensions = {
    width: 100,
    height: 75
}

let rect = {... position, ...dimensions}

const showStretchOperatorOutcome = () => {
    console.log(rect.valueOf());
}

module.exports = showStretchOperatorOutcome;