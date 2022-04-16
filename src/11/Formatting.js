const showFormat = () => {
    let euros = Intl.NumberFormat("pl", {style:"currency", currency: 'PLN'});
    console.log(euros.format(10));
    let pounds = Intl.NumberFormat("en", {style:"currency", currency: 'GBP'});
    console.log(pounds.format(1000));
    let arabic = Intl.NumberFormat("ar", {useGrouping: false})
    console.log(arabic.format(123456789))
}

const showCollator = () => {
    const collator = new Intl.Collator().compare;
    let sorted = ["a","z","Z","A"].sort(collator);
    console.log(sorted);
}
showCollator();

showFormat();

(setTimeout(() => {console.log('1000')},1000));
(setTimeout(() => {console.log('2000')},2000));
(setTimeout(() => {console.log('4000')},4000));
// (setInterval(() => {console.log('Interval 500')},500));
// (setInterval(() => {console.log('Interval 750')},750));

( console.log(setInterval(() => {console.log(new Date().toLocaleTimeString())},1000)))