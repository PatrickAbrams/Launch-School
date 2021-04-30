const input = require('readline-sync');

let width = input.question(" Please enter room width in meters: ");
let length = input.question("PLease enter room length in meters: ");

let metricArea = width * length;
let standardArea = metricArea * 10.7639;
console.log(`The room is ${metricArea} square meters`);
console.log(`The room is ${standardArea} square feet`);
