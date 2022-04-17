class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    has(x) {
        return typeof x === "number" && this.from <= x && x <= this.to;
    }

    toString() {
        return `{ x | ${this.to}  x  ${this.to} }`
    }

    [Symbol.iterator]() {
        let next = Math.ceil(this.from);
        let last = this.to;
        return {
            next() {
                return (next <= last) ? {value: next++} : {done: true}
            },
            [Symbol.iterator]() {
                return this;
            }
        };
    }
}

function filter(iterable, predicate) {
    let iterator = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            for (; ;) {
                let v = iterator.next();
                if (v.done || predicate(v.value)) {
                    return v
                }
            }
        }
    };
}

function map(iterable, f) {
    let iterator = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            let v = iterator.next();
            if (v.done) {
                return v;
            } else {
                return {value: f(v.value)};
            }
        }
    };
}

function words(s) {
    let r = /\s+|$/g;
    r.lastIndex = s.match(/[^ ]/).index;
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            let start = r.lastIndex;
            if (start < s.length) {
                let match = r.exec(s);
                if (match) {
                    return {value: s.substring(start, match.index)};
                }
            }
            return {done: true}
        }
    }
}

const showIterableObject = () => {
    for (let x of new Range(0, 10)) {
        console.log(x);
    }

    console.log(...new Range(-2, 2));

    console.log([...map(new Range(1, 4), x => x * x)]);
    console.log([...filter(new Range(1, 10), x => x % 2 === 0)]);
    console.log([...words("abc       def        ghi!     ")]);
}

showIterableObject()