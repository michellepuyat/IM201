const ccData = './data/events.json';

fetch(ccData)
    .then(function (response) {
        return response.json();
    })

    .then(function (jsonObject) {
        console.table(jsonObject);
        
        const events = jsonObject['events'];
        //unordered list
        let ul = document.createElement('ul');

        //list every event
        for (let i = 0; i < events.length; i++) {
                let li = document.createElement('li');
                ul.appendChild(li);

                //date
                let eventDate = document.createElement('div');
                eventDate.setAttribute('class', 'time');
                //breakdown date
                let day = document.createElement('h2');
                let mo = document.createElement('h3');
                mo.setAttribute('id','month');

                day.textContent = events[i].date;
                mo.textContent = events[i].month;
                eventDate.appendChild(day);
                eventDate.appendChild(mo);
                
                //details
                let detail = document.createElement('div');
                detail.setAttribute('class','details');
                //detail content
                let eventName = document.createElement('h4');
                let time = document.createElement('p');
                let venue = document.createElement('p');

                eventName.textContent = events[i].event;
                time.textContent = events[i].time;
                venue.textContent = events[i].venue;
                detail.appendChild(eventName);
                detail.appendChild(time);
                detail.appendChild(venue);

                li.appendChild(eventDate);
                li.appendChild(detail);
                
                document.querySelector('div.events').appendChild(ul);
            }
        
    })

    .catch(function (err) {
        console.log(err);
    });
