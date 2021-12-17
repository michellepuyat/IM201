const data = './data/directory.json';

fetch(data)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject);
        
        const directory = jsonObject['directory'];

        for (let i = 0; i < directory.length; i++) {
            
                let card = document.createElement('section');
                let name = document.createElement('h2');
                let type = document.createElement('h4');
                let image = document.createElement('img');
                let contact = document.createElement('p');
                let website = document.createElement('p');
                let details = document.createElement('div');
                let detailsImg = document.createElement('div');
                let detailsInfo = document.createElement('div')

                card.setAttribute('class', 'column');
                name.textContent = directory[i].name;
                type.textContent = directory[i].type;
                image.setAttribute('src','./images/business/' + directory[i].logo);
                image.setAttribute('alt',directory[i].name);
                image.setAttribute('width', "455");
                image.setAttribute('height', "455");
                contact.textContent = directory[i].contact;
                website.textContent = directory[i].website;
                details.setAttribute('id', 'details');
                detailsImg.setAttribute('id', 'detailsImg');
                detailsInfo.setAttribute('id', 'detailsInfo')

                card.appendChild(detailsInfo);
                card.appendChild(detailsImg);
                
                detailsInfo.appendChild(details);

                details.appendChild(name);
                details.appendChild(type);
                details.appendChild(contact);
                details.appendChild(website);

                detailsImg.appendChild(image);
                
                document.querySelector('div.cards').appendChild(card);
            }
        
    })

    .catch(function (err) {
        console.log(err);
    });
