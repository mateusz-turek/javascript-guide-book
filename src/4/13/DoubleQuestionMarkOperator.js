const showDoubleQuotationMarkUsage = () => {
    let options = {
        timeout: 0,
        title: "",
        verbose: false,
        n: null
    }

    console.log(options.timeout ?? 1000);
    console.log(options.title ?? 'some title');
    console.log(options.verbose ?? true);
    console.log(options.someProperty ?? 'value');
    console.log(options.n ?? 10);
}

module.exports = showDoubleQuotationMarkUsage;