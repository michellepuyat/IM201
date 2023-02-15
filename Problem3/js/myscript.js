function bmi(){
    let weight = parseFloat(document.getElementById('wt').value);
    let height = (parseFloat(document.getElementById('ft').value) * 12) + parseFloat(document.getElementById('in').value);
    let BMIresult = weight / (height * height) * 703;
    let remarks;

    document.getElementById('output').innerHTML = BMIresult.toFixed(1);

    if (BMIresult >= 30) {
        remarks = "Obesity 🤦‍♀️"
    }
    else if (BMIresult >= 25) {
        remarks = "Overweight 🤦‍♀️"
    } 
    else if (BMIresult >= 18.5) {
        remarks = "Normal Weight 👌"
    }
    else {
        remarks = "Underweight 🤦‍♂️"
    }
    //OUTPUT - the necessary remarks for correct and incorrect answer
    document.getElementById('remarks').innerHTML = remarks;
}