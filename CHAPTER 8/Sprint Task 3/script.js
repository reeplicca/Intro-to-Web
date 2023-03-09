changeMoney.addEventListener('mouseout', changeCurrency);
summaDeneg.addEventListener('keyup', changeCurrency);

function changeCurrency(){
    let money = summaDeneg.value;
    let currency = changeMoney.value;

    if (currency == "KZT") {
        document.getElementById('tradeKZT').textContent = '-'
        document.getElementById('tradeUSD').textContent = (money / 429).toFixed(2)
        document.getElementById('tradeEUR').textContent = (money / 507).toFixed(2)
        
    } else if (currency == "USD") {
        document.getElementById('tradeKZT').textContent = (money * 431).toFixed(2)
        document.getElementById('tradeUSD').textContent = '-'
        document.getElementById('tradeEUR').textContent = (money * 431 / 507).toFixed(2)
    } else {
        document.getElementById('tradeKZT').textContent = (money * 509).toFixed(2)
        document.getElementById('tradeUSD').textContent = (money * 509 / 431).toFixed(2)
        document.getElementById('tradeEUR').textContent = '-'
    }
}