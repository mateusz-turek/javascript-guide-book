let point = {
    x: 3,
    y: 4,
    valueOf: function (){ return Math.hypot(this.x, this.y);},
    toString: function (){return `(${this.x}, ${this.y})`},
    toJSON: function (){return this.toString();}
}

const showMethodInsideObject = () => {
    console.log(point.valueOf());
    console.log(point.toJSON())
}

module.exports = showMethodInsideObject;