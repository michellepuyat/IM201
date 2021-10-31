dateToday = new Date();
timeBetweenP = document.getElementById('timeBetween');

let lastVisit = localStorage.getItem('lastVisit');
    
if (lastVisit == null) {
    //First site visit
    localStorage.setItem('lastVisit', dateToday);
    lastVisit = localStorage.getItem('lastVisit');

    let lastVisitDate = new Date(lastVisit);

    calculateTimePassed(dateToday, lastVisitDate);

} else {
    //Succeeding site visit
    let lastVisitDate = new Date(lastVisit);
        
    calculateTimePassed(dateToday, lastVisitDate);
}

function calculateTimePassed(dateToday, lastVisitDate) {

    let timeBetween = dateToday - lastVisitDate;
    let timeBetweenInMinutes = timeBetween / (1000 * 60);
    let timeBetweenInHours = timeBetweenInMinutes / 60;
    let timeBetweenInDays = timeBetweenInHours / 24;
    let timeBetweenInWeeks = timeBetweenInDays / 7;
    let timeBetweenInMonths = timeBetweenInWeeks / 4.3;
    let timeBetweenInYears = timeBetweenInMonths / 12;
    let timeBetweenInDecades = timeBetweenInYears / 10;

    if (timeBetweenInDays < 7) {
        timePast = Math.round(timeBetweenInDays) + ' days ago';
    } else if (timeBetweenInWeeks < 4) {
        timePast = Math.round(timeBetweenInWeeks) + ' weeks ago';
    } else if (timeBetweenInMonths < 12) {
        timePast = Math.round(timeBetweenInMonths) + ' months ago';
    } else if (timeBetweenInYears < 10) {
        timePast = Math.round(timeBetweenInYears) + ' years ago';
    } else {
        timePast = Math.round(timeBetweenInDecades) + ' decades ago';
    }

    timeBetweenP.innerHTML = 'You visited this page ' + timePast;

    //Reset counter
    localStorage.setItem('lastVisit', dateToday);
}