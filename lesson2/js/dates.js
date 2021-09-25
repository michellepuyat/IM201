const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

//toLocalDateString
const lastmodified = document.getElementById('currentdate')
const datemodified =document.lastModified;
lastmodified.textContent = new Date(datemodified).toLocaleString('en-US');
