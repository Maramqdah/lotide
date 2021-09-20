
const assertEqual = require('../assertEqual');
const head = require('../head');

console.log(head(["Hello", "Lighthouse", "Labs"]));
console.log(assertEqual(head([5,6,7]), 5));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");