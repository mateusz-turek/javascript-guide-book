const https = require("https");
const fetch = require("node-fetch");

const GET_CURRENCIES_ENDPOINT = 'https://api.coinbase.com/v2/currencies';
const GET_CURRENCIES_EXCHANGE = 'https://api.coinbase.com/v2/exchange-rates';

const URL_ARRAY = [
    'https://api.coinbase.com/v2/currencies',
    'https://api.coinbase.com/v2/exchange-rates'
]

async function showAsyncLoop(ulrArray){
    const promises = ulrArray.map( url => fetch(url));
    for await (const response of promises){
        console.log(response)
    }
}

showAsyncLoop(URL_ARRAY);

async function getResponse(url){
    let response = await fetch(url);
    let json = await response.json();
    return json;
}

async function showAsync () {
    console.log(await getResponse(GET_CURRENCIES_ENDPOINT))
    console.log(await getResponse(GET_CURRENCIES_EXCHANGE))
}

const showAsyncPromise = () => {
    getResponse(GET_CURRENCIES_EXCHANGE).then(data => {
        console.log(data);
    })
}
//showAsyncPromise();

//showAsync();