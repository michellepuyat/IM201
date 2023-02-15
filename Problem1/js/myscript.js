function percentage(){
    let classHeld = parseFloat(document.getElementById('classHeld').value);
    let classAttended = parseFloat(document.getElementById('classAttended').value);
    let percentageOfClassesAttended = classAttended / classHeld * 100;
    let remarks;

    document.getElementById('output').innerHTML = percentageOfClassesAttended.toFixed(1) + "%";

    if (percentageOfClassesAttended >= 75) {
        remarks = "You can take the exam 👌"
    }
    else {
        remarks = "You are not allowed to take the exam 😥"
    }
    //OUTPUT - the necessary remarks for correct and incorrect answer
    document.getElementById('remarks').innerHTML = remarks;
}