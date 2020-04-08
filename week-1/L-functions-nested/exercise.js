var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function getMentorName(name) {
  var capGreeting = "HELLO " + name.toUpperCase();

  return capGreeting;
}

console.log(getMentorName(mentor1));
console.log(getMentorName(mentor2));
console.log(getMentorName(mentor3));
console.log(getMentorName(mentor4));
console.log(getMentorName(mentor5));

// function getAgeInDays(age) {
//   return age * 365;
// }

// function createGreeting(name, age) {
//   var ageInDays = getAgeInDays(age);
//   var message =
//     "My name is " + name + " and I was born over " + ageInDays + " days ago!";
//   return message;
// }

// console.log(createGreeting("Umit", 32));
