const data = './data/businesses.json';

fetch(data)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject);
        
        const businesses = jsonObject['businesses'];

        for (let i = 0; i < businesses.length; i++) {
            
                let card = document.createElement('section');
                let name = document.createElement('h2');
                let motto = document.createElement('h4');
                let image = document.createElement('img');
                let details = document.createElement('div');
                let detailsImg = document.createElement('div');
                let detailsInfo = document.createElement('div')

                name.textContent = businesses[i].name;
                motto.textContent = businesses[i].motto;
                image.setAttribute('src','./images/card/' + businesses[i].photo);
                image.setAttribute('alt',businesses[i].name);
                image.setAttribute('width', "683");
                image.setAttribute('height', "455");
                details.setAttribute('id', 'details');
                detailsImg.setAttribute('id', 'detailsImg');
                detailsInfo.setAttribute('id', 'detailsInfo')

                card.appendChild(detailsInfo);
                card.appendChild(detailsImg);
                
                detailsInfo.appendChild(details);

                details.appendChild(name);
                details.appendChild(motto);

                detailsImg.appendChild(image);
                
                document.querySelector('div.cards').appendChild(card);
            }
        
    })

    .catch(function (err) {
        console.log(err);
    });
