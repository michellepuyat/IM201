let t = parseInt(document.getElementById('current-temp').innerText);
let v = parseInt(document.getElementById('wind-speed').innerText);
    
if (t > 50 || v < 3) {
        document.getElementById('wind-chill').innerHTML =  'N/A';
} else {
   document.getElementById('wind-chill').innerHTML = windChill(t, v).toFixed(2) +'\xB0F';
}


function windChill(t, v){
    let f = 35.74 + 0.6215 * t - 35.75 * Math.pow(v, 0.16) + 0.4275 * t * Math.pow(v, 0.16);
    //let f = 35.74 + 0.6215* t + (0.4275 * t - 35.75) * Math.pow(v, 0.16);
    return f;
}