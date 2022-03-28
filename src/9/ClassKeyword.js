class Range {
    constructor(from,to) {
        this.from = from;
        this.to = to;
    }

    includes(x){
        return this.from <= x && x<= this.to;
    }

    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x<= this.to; x++) yield x;
    }

    toString(){
        return `(${this.from}...${this.to})`;
    }

    static integerRangePattern = /^\((\d+)\.\.\.(\d+)\)$/;

    static parse(s){
        let matches = s.match(Range.integerRangePattern);
        if(!matches){
            throw new TypeError(`"${s}" cant create Range`)
        } else {
            return new Range(parseInt(matches[1]), parseInt(matches[2]))
        }
    }
}

class Span extends Range {
    constructor(start,length) {
        if(length => 0){
            super(start,start+length);
        }else {
            super(start+length,start)
        }
    }
}

const showClassUsage =()=> {
    let r = new Range(1,3);
    console.log(r.includes(2));
    console.log(r.toString());
    console.log([...r]);

    let r2 = Range.parse('(1...10)')
    console.log(r2);

    console.log(r.parse('(1...4)'))
}

//showClassUsage();

class Complex {

    #r = 0;
    #i = 0;

    constructor(real,imaginary) {
        this.r = real;
        this.i = imaginary;
    }

    plus(that){
        return new Complex(this.r + that.r, this.i + that.i);
    }

    times(that){
        return new Complex(this.r * that.r - this.i* that.i,
            this.r* that.i + this.i * that.r);
    }

    static sum(c,d){
        return c.plus(d);
    }

    static product(c,d){
        return c.times(d);
    }

    get real() {
        return this.#r;
    }

    get  imaginary(){
        return this.#i
    }

    get magnitude(){
        return Math.hypot(this.r, this.i);
    }

    toString(){
        return `${this.i} , ${this.r}`;
    }

    equals(that){
        return that instanceof Complex &&
            this.r === that.r &&
            this.i === that.i;
    }

    static ZERO = new Complex(0,0);
    static ONE = new Complex(1,0);
    static I = new Complex(0,1);

}

class Buffer {
    #size = 0

    constructor(size) {
        this.#size = size
    }

    get size(){
        return this.#size;
    }
    set size(size){
        this.#size = size;
    }
}

const showComplex =()=> {
    let b = new Buffer(-2);
    console.log(b.size);
    b.size = 1;
    console.log(b.size)
    let c = new Complex(2,3);
    let d = new Complex(c.i,c.r);
    console.log(c.i);
    console.log(c.r);
    console.log(d);
    console.log(c.plus(d).toString());
    console.log(c.magnitude)
    console.log(Complex.product(c,d))
    console.log(Complex.ZERO.toString())
}

showComplex();