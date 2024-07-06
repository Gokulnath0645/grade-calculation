function calculateGrade() {
    let name = document.getElementById('name').value;
    let subject1 = parseFloat(document.getElementById('subject1').value);
    let subject2 = parseFloat(document.getElementById('subject2').value);
    let subject3 = parseFloat(document.getElementById('subject3').value);
    let subject4 = parseFloat(document.getElementById('subject4').value);
    let subject5 = parseFloat(document.getElementById('subject5').value);



    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3)) {
        alert('Please enter valid grades for all subjects.');
        return;
    }

    let total = subject1 + subject2 + subject3 + subject4 + subject5;
    let average = total / 5;

    let grade;
    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    } else if (average >= 70) {
        grade = 'C';
    } else if (average >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    document.getElementById('result').innerHTML = `
        <p>${name}, your average grade is ${average.toFixed(2)}</p>
        <p>Your final grade is ${grade}</p>
    `;
}
