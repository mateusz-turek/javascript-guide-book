const showGetterSetter = () => {
    let o = {
        dataProp: '',
        get dataProperty() {return this.dataProp;},
        set dataProperty(value) { this.dataProp = value;}
    }

    console.log(o.dataProperty);
    o.dataProperty = 'asd';
    console.log(o.valueOf());
}

const showGetterSetterSecond = () => {
    let object = {
        x: 1.0,
        y: 1.0,

        get r() { return Math.hypot(this.x, this.y);},
        set r(newValue) {
            let oldValue = Math.hypot(this.x, this,this.y)
            let ratio = newValue;
            this.x *= ratio;
            this.y *= ratio;
        },
        get theta() {return Math.atan2(this.y, this.x)}
    }

    console.log(object.valueOf());
    console.log(object.r);
    console.log(object.theta);

    object.r = 2;
    console.log(object.valueOf());
    console.log(object.theta);
}

module.exports.gs1 = showGetterSetter;
module.exports.gs2 = showGetterSetterSecond;