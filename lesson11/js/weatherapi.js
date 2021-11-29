const cityId = document.querySelector('.stats').dataset["id"];
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=a3d8b9de1fc1f3f0ac9d0f0ad4f61c16`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let t = Math.round((jsObject.main.temp - 273.15) * (9/5) + 32).toFixed(2);
        let v = jsObject.wind.speed;

        document.getElementById('current-temp').textContent = t +'\xB0F';
        document.getElementById('temp-max').textContent = Math.round((jsObject.main.temp_max - 273.15) * (9/5) + 32).toFixed(2) +'\xB0F';
        //windchill
        if (t > 50 || v < 3) {
            document.getElementById('wind-chill').innerHTML =  'N/A';
        } else {
        document.getElementById('wind-chill').innerHTML = windChill(t, v).toFixed(2) +'\xB0F';
        }

        document.getElementById('humidity').textContent = jsObject.main.humidity +'%';
        document.getElementById('wind-speed').textContent = v + 'mph';
        console.log(jsObject);

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;

        document.getElementById('weather-today').textContent = desc.toUpperCase();

    });
    
function windChill(t, v){
    let f = 35.74 + 0.6215 * t - 35.75 * Math.pow(v, 0.16) + 0.4275 * t * Math.pow(v, 0.16);
    return f;
}

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=a3d8b9de1fc1f3f0ac9d0f0ad4f61c16`;

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        let newList = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
        
        for (let day = 0; day <= 4; day ++) {
            let d = new Date(newList[day].dt_txt);
            let dayTemp = Math.round((newList[day].main.temp - 273.15) * (9/5) + 32).toFixed(2);
            document.getElementById(`dayWeek${day+1}`).textContent = dayOfWeek[d.getDay()];
            document.getElementById(`forecast${day+1}`).textContent = dayTemp + '\xB0F';

            const imgalt = newList[day].weather[0].description;
            const imagesrc = 'https://openweathermap.org/img/wn/' + newList[day].weather[0].icon + '@2x.png';
            document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${day+1}`).setAttribute('alt', imgalt);
        }
    })
