const listcontainer = document.querySelector('.listcontainer');
const favchap = document.querySelector('#favchap');
const addbtn = document.querySelector('#addbtn');

function addLists() {
    const bombooks = ['1 Nephi','2 Nephi','Jacob', 'Enos', 'Jarom','Omni','Mormon','Mosiah', 'Alma', 'Helaman', '3 Nephi', '4 Nephi', 'Mormon', 'Ether', 'Moroni'];

    if (favchap.value == ''){
        alert('Enter a valid Book of Mormon Chapter')
    } else if (bombooks.includes(favchap.value) = false) {
        alert( favchap.value & 'is not a valid Book of Mormon Chapter')
    } else {
        const ul = listcontainer.querySelector('ul');
        const li = document.createElement('li');

        li.innerHTML = favchap.value;
        favchap.value = '';
        ul.appendChild(li);

        deletebtn(li);
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

//create delete button
const listUl = document.querySelector('.list');
const lis = listUl.children;

function deletebtn(li) {
    const remove = document.createElement('button');
    remove.textContent = '❌';
    remove.className = 'remove';
    li.appendChild(remove);

    return li;
}

for (var i = 0; i < lis.length; i++) {
    deletebtn(lis[i]);
}

listcontainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      const button = event.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      if (button.className === 'remove') {
        ul.removeChild(li);
      } 
    }
  });