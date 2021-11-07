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

//hide and show banner
const dayName = new Date().toLocaleString('en-us', {weekday:'long'})

if (dayName == "Friday") {
    document.getElementById("banner").style.display = 'block';
} else {
    document.getElementById("banner").style.display= 'none';
}

//stormseverity
function adjustSeverity(rating) {
    document.getElementById("severity").innerHTML = rating;
}

