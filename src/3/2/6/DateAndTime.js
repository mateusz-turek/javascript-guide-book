const showDate = () => {
    let timestamp = Date.now();
    console.log('Date.now: ' + timestamp);
    let now = new Date();
    console.log('new Date: ' + now);
    let ms = now.getTime();
    console.log('new Date.ms: ' + ms);
    let iso = now.toISOString();
    console.log('new Date.toISOString: ' + iso);
}

module.exports = showDate;