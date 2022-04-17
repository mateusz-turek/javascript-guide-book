const https = require("https");

const GET_CURRENCIES_ENDPOINT = 'https://api.coinbase.com/v2/currencies';
const GET_CURRENCIES_EXCHANGE = 'https://api.coinbase.com/v2/exchange-rates';

const getDataByURL = (url) => {
    return new Promise((resolve, reject) => {
        let request = https.get(url, response => {
            if (response.statusCode !== 200) {
                reject('status !== 200');
                response.resume();
            } else if (response.statusCode === 200) {
                let body = ''
                response.setEncoding("utf-8");
                response.on("data", chunk => {
                    body += chunk
                })
                response.on("end", () => {
                    let parsed = JSON.parse(body);
                    resolve(parsed);
                })
            }
        });
    })
}

(getDataByURL(GET_CURRENCIES_EXCHANGE).then(data => console.log(data)));
(getDataByURL(GET_CURRENCIES_ENDPOINT).then(data => console.log(data)));