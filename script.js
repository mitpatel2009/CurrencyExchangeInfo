const fromDropdown = document.getElementById("from-currency-select");
const toDropdown = document.getElementById("to-currency-select");
let api = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromDropdown.add(option);
});

currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropdown.add(option);
});

fromDropdown.value = "SGD";
toDropdown.value = "INR";

let convertCurrency = () => {
  let toCurrency = toDropdown.value;
  let fromCurrency = fromDropdown.value;
  fetch(api)
    .then((resp) => resp.json())
    .then((data) => {
      let fromExchangeRate = data.conversion_rates[fromCurrency];
      let toExchangeRate = data.conversion_rates[toCurrency];
      let convertedAmount = (amount.value / fromExchangeRate) * toExchangeRate;
      result.innerHTML = `${convertedAmount}`;
    });

  result.textContent = "Converted";
};
convert.onclick = convertCurrency;
