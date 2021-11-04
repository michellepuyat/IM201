const input = document.querySelector('input');
const add = document.querySelector('#addbtn');
const list = document.querySelector('list');
const count = document.querySelector('#count');
const listcontainer = document.querySelector('.listcontainer');
const favchap = document.querySelector('#favchap');
const addbtn = document.querySelector('#addbtn');


document.addEventListener('DOMContentLoaded',()=> {
  getStoredList();
})

function getStoredList() {
  try {
    let chapters = localStorage.getItem('bomchaps');
    if (chapters.length > 0) {
      count.textContent = chapters.length; //counter
      renderList(chapters); //display list
    } else {
      count.textContent = 0; //set counter to 0
    }
  }
  catch (er) {
    count.textContent = 0;
  }
}

function renderList(chapters) {
  list.innerHTML = '';
  chapters.forEach(item => {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item.chapter; //puwede ito mali
    deletebutton.textContent = '❌';
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', function() {
      list.removeChild(li);
      input.focus;
    })
    input.value = '';
    input.focus();
  })
}

let

function addLists() {
    const bombooks = ['Nephi','Jacob', 'Enos', 'Jarom','Omni','Mormon','Mosiah', 'Alma', 'Helaman', 'Mormon', 'Ether', 'Moroni'];

    if (favchap.value == ''){
        alert('Enter a valid Book of Mormon Chapter')
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