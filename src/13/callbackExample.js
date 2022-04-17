const https = require("https");

const GET_CURRENCIES_ENDPOINT = 'https://api.coinbase.com/v2/currencies';

function getCurrencies(url, callbackFunction) {
    let request = https.get(url);
    request.on("response", response => {
        let httpStatus = response.statusCode;
        response.setEncoding("utf-8");
        let body = "";
        response.on("data", chunk => {
            body += chunk;
        });
        response.on("end", () => {
            if (httpStatus === 200) {
                callbackFunction(null, body);
            } else {
                callbackFunction(httpStatus, null);
            }
        });
    });
    request.on("error", err => {
        callbackFunction(err, null);
    })
}

(getCurrencies(GET_CURRENCIES_ENDPOINT, (onError, onSuccess) => {
    if (onError) {
        console.error(onError);
    } else if (onSuccess) {
        console.log(JSON.parse(onSuccess))
    }
}))