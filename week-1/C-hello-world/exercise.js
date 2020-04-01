/* var greeting = "Hello Umit!";
var messageType = typeof greeting;

console.log(messageType);

console.log(greeting.repeat([3]));
console.log("WTF?"); */

/* var introduction = "Hello, my name is ";
var name = "Umit";

var greetingNew = introduction + name;

console.log(greetingNew);*/

var dx = 22;
var dy = 8;
var dz = 6;

var volume = dx * dy * dz;
var surfaceArea = 2 * (dx * dy) + 2 * (dy * dz) + 2 * (dx * dz);

console.log(volume);
console.log(surfaceArea);

var density = 890 / volume;
console.log(density);

var preciseAge = 32.32526;
console.log(preciseAge);

var roughAge = Math.round(preciseAge);

console.log(roughAge);
