var numberOfStudents = 15;
var numberOfMentors = 8;

var percentageStudents = (15 / 23) * 100;
var percentageMentors = (8 / 23) * 100;

var roundedStudents = Math.round(percentageStudents);
var roundedMentors = Math.round(percentageMentors);

console.log("Percentage students: %" + percentageStudents);
console.log("Percentage Mentors: %" + percentageMentors);

console.log("Students' Ratio: %" + roundedStudents);
console.log("Mentors' Ratio %" + roundedMentors);
