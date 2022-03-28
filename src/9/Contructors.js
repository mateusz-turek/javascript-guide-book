function Range(from, to) {
    this.from = from;
    this.to = to;
}

Range.prototype = {
    includes(x) {
        return this.from <= x && x <= this.to;
    },
    * [Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },
    toString() {
        return "(" + this.from + "..." + this.to + ")";
    }
}

const showNewInstanceOfRange = () => {
    let r = new Range(1, 3);
    console.log(r);
    r.includes(2);
    console.log(r.includes(2));
    console.log(r.toString());
    console.log([...r]);
}

showNewInstanceOfRange();

// with class keyword it does not work
function ConstructorCheck(a) {
    console.log(!new.target);
    if (!new.target) {
        return new ConstructorCheck(0);
    } else {
        this.a = a
    }
}

const showConstructorCheck = () => {
    let checker = ConstructorCheck(10);
    console.log(checker);
    let checker2 = new ConstructorCheck(10);
    console.log(checker2);
}

showConstructorCheck();