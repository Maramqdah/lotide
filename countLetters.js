const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
 } else {
   console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
 } 


 
};

const countLetters=function(stringToCount){
  let result = [...stringToCount].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {}); 
  console.log(result);

}

console.log(countLetters("lighthouse in the house") )