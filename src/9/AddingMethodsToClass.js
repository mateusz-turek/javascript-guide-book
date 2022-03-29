const classKeyword = require('./ClassKeyword')

const show = () => {
    classKeyword.Complex.prototype.conj = function (r,i) {
        return new classKeyword.Complex(r, i)
    }
    let conj = classKeyword.Complex.prototype.conj(1,2);
    console.log(conj);
}

show();