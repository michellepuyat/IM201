const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a3d8b9de1fc1f3f0ac9d0f0ad4f61c16';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('current-temp').textContent = Math.round((jsObject.main.temp - 273.15) * (9/5) + 32).toFixed(2);
        console.log(jsObject);

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;

        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
    });

