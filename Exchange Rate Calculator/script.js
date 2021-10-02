// const currencyEl_one = document.getElementById('currency-one');
// const amountEl_one = document.getElementById('amount-one');
// const currencyEl_two = document.getElementById('currency-two');
// const amountEl_two = document.getElementById('amount-two');

// const rateEl = document.getElementById('rate');
// const swap = document.getElementById('swap');

// // Fetch exchange rates and update the DOM
// function calculate() {
//   const currency_one = currencyEl_one.value;
//   const currency_two = currencyEl_two.value;

//   fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
//     .then(res => res.json())
//     .then(data => {
//       // console.log(data);
//       const rate = data.rates[currency_two];

//       rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

//       amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
//     });
// }

// // Event listeners
// currencyEl_one.addEventListener('change', calculate);
// amountEl_one.addEventListener('input', calculate);
// currencyEl_two.addEventListener('change', calculate);
// amountEl_two.addEventListener('input', calculate);

// swap.addEventListener('click', () => {
//   const temp = currencyEl_one.value;
//   currencyEl_one.value = currencyEl_two.value;
//   currencyEl_two.value = temp;
//   calculate();
// });

// calculate();

const currency1 = document.querySelector("#currency-one")
const amount1 = document.querySelector("#amount-one")
const currency2 = document.querySelector("#currency-two")
const amount2 = document.querySelector("#amount-two")
const sbutton = document.querySelector("#swap")
const rate = document.querySelector(".rate")

//fetch exchange rate and calculate
function calculate() {
    // console.log("ran");
    const currency_one = currency1.value
    const currency_two = currency2.value
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then( function(res) {
        // console.log(res.json());
        return res.json()
    })
    .then(data => {
        // console.log(data);
        const rates = data.rates[currency_two]
        // console.log(rates);
        rate.innerText = `1 ${currency_one} = ${rates} ${currency_two}`
        amount2.value = (amount1.value * rates).toFixed(2)

        
    } )

}


//event listners
currency1.addEventListener("change", calculate)
amount1.addEventListener("input", calculate)
currency2.addEventListener("change", calculate)
amount2.addEventListener("input", calculate)
    
sbutton.addEventListener("click", ()=>{
    const temp = currency1.value
    currency1.value = currency2.value
    currency2.value = temp
    calculate()

})
calculate();