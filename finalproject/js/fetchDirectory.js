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
                let website = document.createElement('a');
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
                contact.textContent = "📞" + directory[i].contact;
                website.textContent = "🔗 Website";
                website.setAttribute('href', directory[i].website);
                website.setAttribute("target", "_blank");
                details.setAttribute('id', 'details');
                detailsImg.setAttribute('id', 'detailsImg');
                detailsInfo.setAttribute('id', 'detailsInfo')

                card.appendChild(detailsImg);
                card.appendChild(detailsInfo);
                
                detailsInfo.appendChild(details);

                details.appendChild(name);
                details.appendChild(type);
                details.appendChild(contact);
                details.appendChild(website);

                detailsImg.appendChild(image);
                
                document.querySelector('div.directory').appendChild(card);
            }
        
    })

    .catch(function (err) {
        console.log(err);
    });
