const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//fetching exchange rate and updating to DOM

const calculate = () => {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    window.fetch(` https://v6.exchangerate-api.com/v6/72bdc46d161e135aa5232eda/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.conversion_rates[currency_two];

        rateEl.innerText = `1${currency_one} = ${rate} ${currency_two}`;
        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
        console.log(amountEl_one.value);
    })
}

//event listeners 
currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);

//swap 
swap.addEventListener('click', () => {
    let temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;

    calculate();
} )

calculate();