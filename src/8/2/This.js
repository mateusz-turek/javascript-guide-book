const showThisIssue = () => {
    let object = {
        methodOne: function () {
            let self = this;
            console.log('object === this');
            console.log(object === this);
            f();
            function f(){
                console.log('object === this');
                console.log(object === this);
                console.log('self === object');
                console.log(self === object);
            }
            const arrowFunction = () => {
                console.log('nested arrow function');
                console.log('object === this');
                console.log(object === this);
                console.log('self === object');
                console.log(self === object);
            }
            arrowFunction()

            const bindFunction = function (){
                console.log('function with .bind(this)');
                console.log('object === this');
                console.log(object === this);
                console.log('self === object');
                console.log(self === object);
            }.bind(this)

            bindFunction();
        }
    }
    object.methodOne();
}

module.exports.showThisIssue = showThisIssue;