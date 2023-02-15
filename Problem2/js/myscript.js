document.getElementById("currency").addEventListener("change", changeLabel)
document.getElementById("currency1").defaultValue = 1;

function changeLabel(){
    let currencyChosen = document.getElementById('currency').value;
    
    switch (currencyChosen) {
        case 'us':
            document.getElementById('from').innerHTML = "US Dollar: ";
            break;
        case 'hk':
            document.getElementById('from').innerHTML = "HK Dollar: ";
            break;
        case 'au':
            document.getElementById('from').innerHTML = "AU Dollar: ";
            break;
        case 'nz':
            document.getElementById('from').innerHTML = "NZ Dollar: ";
            break;
        case 'jp':
            document.getElementById('from').innerHTML = "Japan Yen: ";
            break;
        case 'sa':
            document.getElementById('from').innerHTML = "SA Riad (Dinnar): ";
            break;
        case 'uk':
            document.getElementById('from').innerHTML = "UK Pound: ";
            break;
    }
}

function convert(){
    let exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
    let from = parseFloat(document.getElementById('currency1').value);
    let to = exchangeRate * from;

    document.getElementById('currency2').value = to.toFixed(1);
}

function convert2(){
    let exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
    let from = parseFloat(document.getElementById('currency2').value);
    let to = from / exchangeRate;

    document.getElementById('currency1').value = to.toFixed(1);
}