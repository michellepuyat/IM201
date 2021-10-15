const listcontainer = document.querySelector('.listcontainer');
const favchap = document.querySelector('#favchap');
const addbtn = document.querySelector('#addbtn');

function addLists() {
    if (favchap.value == ''){
        alert('Enter a valid Book of Mormon Chapter')
    } else {
        const ul = listcontainer.querySelector('ul');
        const li = document.createElement('li');

        li.innerHTML = favchap.value;
        favchap.value = '';
        ul.appendChild(li);
    }
}

addbtn.addEventListener('click', () => {
    addLists();
  });

addbtn.addEventListener('keyup', (event) => {
   if(event.which === 13) {
     addLists();
   }
});

