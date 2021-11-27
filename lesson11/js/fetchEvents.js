
console.log(cityId);
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    
    if (cityId == "5604473") {
        var townfilter = towns.filter(x => x.name == "Preston");
    }
    else if (cityId == "5607916") {
        var townfilter = towns.filter(x => x.name == "Soda Springs");
    }
    else if (cityId == "5585010") {
        var townfilter = towns.filter(x => x.name == "Fish Haven");
    }
    
    let townEvents = townfilter[0].events;
    let ul = document.createElement('ul'); 

    townEvents.forEach(event => {
    let listItem = document.createElement('li');
    listItem.innerHTML = event;
    ul.append(listItem);
  }); 

  document.getElementById("townEvents").appendChild(ul);
});