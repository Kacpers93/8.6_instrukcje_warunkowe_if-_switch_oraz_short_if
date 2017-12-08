var a = prompt("Enter the first number:");
var b = prompt("Enter the second number:");
var value = (a * a) - (2 * a * b) + (b * b);

console.log('Your result is: ' + value);
if (value > 0) console.log('positive result');
else if (value < 0) console.log('negative result');
else console.log('the result is equal to zero');


