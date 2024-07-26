function generateInputFields() {
    var numSubjects = document.getElementById('numSubjects').value;
    var inputFields = document.getElementById('inputFields');
    inputFields.innerHTML = ''; // Clear existing fields
    for (var i = 0; i < numSubjects; i++) {
        var div = document.createElement('div');
        div.innerHTML = `
            <input type="text" placeholder="Grade for Subject ${i+1}" class="grade">
            <input type="number" placeholder="Credits for Subject ${i+1}" class="credits">
        `;
        inputFields.appendChild(div);
    }
}

function calculateCGPA() {
    var grades = document.querySelectorAll('.grade');
    var credits = document.querySelectorAll('.credits');
    var totalGradePoints = 0;
    var totalCredits = 0;
    var gradeMap = {'O': 10, 'A+': 9, 'A': 8, 'B+': 7, 'B': 6, 'C': 5};
    for (var i = 0; i < grades.length; i++) {
        var grade = grades[i].value.toUpperCase();
        var credit = parseFloat(credits[i].value);
        if (gradeMap.hasOwnProperty(grade) && !isNaN(credit)) {
            totalGradePoints += gradeMap[grade] * credit;
            totalCredits += credit;
        } else {
            alert('Invalid grade or credit entered for Subject ' + (i + 1));
            return;
        }
    }
    var cgpa = totalGradePoints / totalCredits;
    document.getElementById('result').innerHTML = 'Your GPA is: ' + cgpa.toFixed(2);
}