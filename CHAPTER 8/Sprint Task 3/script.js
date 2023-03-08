changeMoney.addEventListener('mouseout', changeCurrency);

function changeCurrency(){
    let money = summaDeneg.value;
    let currency = changeMoney.value
    console.log(currency)

    if (currency == "KZT") {
        document.getElementById('tradeKZT').textContent = '-'
        document.getElementById('tradeUSD').textContent = (money / 429).toFixed(2)
        document.getElementById('tradeEUR').textContent = (money / 509).toFixed(2)
        
    } else if (currency == "USD") {
        document.getElementById('tradeKZT').textContent = (money * 429).toFixed(2)
        document.getElementById('tradeUSD').textContent = '-'
        document.getElementById('tradeEUR').textContent = (money * 429 / 507).toFixed(2)
    } else {
        document.getElementById('tradeKZT').textContent = (money * 507).toFixed(2)
        document.getElementById('tradeUSD').textContent = (money * 507 / 429).toFixed(2)
        document.getElementById('tradeEUR').textContent = '-'
    }

}