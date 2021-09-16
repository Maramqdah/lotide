const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
 } else {
   console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
 } 
 
};

const head = function (someArray) {
  return someArray[0];
  
}

console.log(head(["Hello", "Lighthouse", "Labs"]));
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");