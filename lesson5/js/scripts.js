const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

//toLocalDateString
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}