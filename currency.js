import countries from "./country_name.js";
let convert = document.querySelector("#convert");
let from = document.querySelector("#from");
let to = document.querySelector("#to");
let result = document.querySelector("#result");
let amount = document.querySelector("#amount")
const URL = "https://open.er-api.com/v6/latest/USD";


for (let option in countries) {
  let newoption = document.createElement("option")
  newoption.innerText = option;
  newoption.value = option;
  from.append(newoption)
}
for (let option in countries) {
  let newoption = document.createElement("option")
  newoption.innerText = option;
  newoption.value = option;
  to.append(newoption)
}

const getdata = (async () => {
  let response = await fetch(URL);
  let data = await response.json()
  let fromrates = data.rates[from.value];
  let torates = data.rates[to.value];
  let amountvalue = Number(amount.value);
  let finalresult = amountvalue / fromrates * torates
  if (amountvalue === 0) {
    result.innerText = "Enter Amount";
  } else {
    result.innerText = `${amountvalue}${from.value}=${finalresult.toFixed(2)} ${to.value}`
  }
})
convert.addEventListener("click", () => {
  getdata()
})

