const https = require("https");
const fetch = require("node-fetch");

const GET_CURRENCIES_ENDPOINT = 'https://api.coinbase.com/v2/currencies';
const GET_CURRENCIES_EXCHANGE = 'https://api.coinbase.com/v2/exchange-rates';

function promiseSequence(inputs, promiseMaker) {
    inputs = [...inputs];

    function handleNextInput(outputs) {
        if (inputs.length === 0) {
            return outputs;
        } else {
            let nextInput = inputs.shift();
            return promiseMaker(nextInput)
                .then(output => outputs.concat(output))
                .then(handleNextInput);
        }
    }

    return Promise.resolve([]).then(handleNextInput);
}

function fetchBody(url) {
    return fetch(url).then(r => r.json());
}

(promiseSequence([GET_CURRENCIES_EXCHANGE, GET_CURRENCIES_ENDPOINT],fetchBody)
        .then(bodies => {
            console.log(bodies.length)
            console.log(bodies[0])
            console.log(bodies[1])
        })
        .catch(console.error)
)