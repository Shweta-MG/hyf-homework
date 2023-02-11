let ApiUrlForSymbols = 'https://api.exchangerate.host/symbols';
let ApiUrlForConversion = new URL('https://api.exchangerate.host/convert');
let fromCurrencyElem = document.querySelector('#fromCurrency');
let toCurrencyElem = document.querySelector('#toCurrency');
let formElement = document.querySelector('#executionForm');
let inputAmount = document.getElementById('inputAmount');
let convertResultElement = document.getElementById('convertedAmount');


const getCurrencyOptions = async () => {
    const response = await fetch(ApiUrlForSymbols);
    const json = await response.json();
    return json.symbols;
};


const getCurrencyRate = async (fromCurrency, toCurrency) => {
    ApiUrlForConversion.searchParams.append('from', fromCurrency);
    ApiUrlForConversion.searchParams.append('to', toCurrency);
    const response = await fetch(ApiUrlForConversion);
    const json = await response.json();
    return json.result;
};

const appendOptionToSelect = (selectElement, optionItem) => {
    let optionElement = document.createElement('option'); //Options do not work
    optionElement.value = optionItem.code;
    optionElement.textContent = optionItem.description;
    selectElement.appendChild(optionElement)
};

const populateSelectElement = (selectElement, optionList) => {
    optionList.forEach(optionItem => {
        appendOptionToSelect(selectElement, optionItem);
    })
};

const setupCurrencies = async () => {
    const CurrencyOptions = await getCurrencyOptions();
    const currencies = Object.keys(CurrencyOptions).map(currencyKey => CurrencyOptions[currencyKey]);
    
    populateSelectElement(fromCurrencyElem, currencies);
    populateSelectElement(toCurrencyElem, currencies);
};

const setUpEventListner = () => {
    
    formElement.addEventListener('submit', async event => {
        event.preventDefault();
       
        try {
            const rate = await getCurrencyRate(fromCurrencyElem.value, toCurrencyElem.value);
            const amountValue = Number(inputAmount.value);
            const conversionResult = Number(amountValue * rate).toFixed(2);
            convertResultElement.textContent = `${amountValue} ${fromCurrencyElem.value} = ${conversionResult} ${toCurrencyElem.value} `;
        } catch (error) {
            convertResultElement.textContent = 'There was an error fetching the data'
        }
    });
};

setupCurrencies();
setUpEventListner();



function clearVal() {
    window.location.reload();
    document.getElementsByClassName("convertValue").innerHTML = "";
};