const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject);
        
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                let card = document.createElement('section');
                let name = document.createElement('h2');
                let motto = document.createElement('h4');
                let image = document.createElement('img')
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainFall = document.createElement('p');
                let details = document.createElement('div');
                
                name.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
                averageRainFall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
                yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                image.setAttribute('src','/lesson9-home/images/card/' + towns[i].photo);
                image.setAttribute('alt',towns[i].name);
                details.setAttribute('id', 'details');

                card.appendChild(details);
                card.appendChild(image);

                details.appendChild(name);
                details.appendChild(motto);
                details.appendChild(yearFounded);
                details.appendChild(currentPopulation);
                details.appendChild(averageRainFall);

                document.querySelector('div.cards').appendChild(card);
            }
        }
    })

    .catch(function (err) {
        console.log(err);
    });