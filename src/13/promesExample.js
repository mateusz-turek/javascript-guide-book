const https = require("https");
const fetch = require("node-fetch");

const GET_CURRENCIES_ENDPOINT = 'https://api.coinbase.com/v2/currencies';
const GET_CURRENCIES_EXCHANGE = 'https://api.coinbase.com/v2/exchange-rates';

const showPromiseAll = () => {
    console.log('================Promise.all=====================================')
    let urlArray = [GET_CURRENCIES_ENDPOINT, GET_CURRENCIES_EXCHANGE];
    let promises = urlArray.map(url => fetch(url).then(r => r.json()));
    Promise.all(promises)
        .then(responses => {
            let responseObject = []
            responses.forEach((response) => {
                responseObject.push(response);
            });
            return responseObject;
        })
        .then((success) => {
            console.log(success.length)
            console.log('success[0].data')
            console.log(success[0].data)
            console.log('success[1].data')
            console.log(success[1].data)
        })
        .finally(() => {
            console.log('================Promise.all=====================================')
        });
}

showPromiseAll();

const showDeterminedPromises = () => {
    let promise1 = fetch(GET_CURRENCIES_EXCHANGE);
    let promise2 = promise1.then(USDCurrencyRateCallback)
    let promise3 = promise2.then(getExchangeForOneRate)
    let promise4 = promise3.then(onLast)
    let data = promise4.then(last => {
        return last.data[0];
    });

    data.then(() => {
        console.log('====================================================');
        console.log(data)
    })
}

const showChainedPromises = () => {
    fetch(GET_CURRENCIES_EXCHANGE)
        .then(USDCurrencyRateCallback)
        .then(getExchangeForOneRate)
        .then(onLast)
        .then((response) => {
            console.log('last')
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            console.log('end')
        })
}

const USDCurrencyRateCallback = (response) => {
    return response.json();
}

const getExchangeForOneRate = (USDCurrencyRate) => {
    console.log(USDCurrencyRate);
    console.log('received one');
    return fetch(GET_CURRENCIES_ENDPOINT + '?currency=USD')
}

const onLast = (response) => {
    console.log('received second response');
    return response.json();
}

//showChainedPromises();
//showDeterminedPromises()