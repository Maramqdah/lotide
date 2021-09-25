
const eqArrays= function(array1,array2) {
  if(JSON.stringify(array1)==JSON.stringify(array2)){
   return console.log("true");
  }else{
    console.log("not true");
  }
}

eqArrays(["1", "2", "3"], ["1", "2", "3"])
eqArrays(["1", "2", "3"], ["1", "2", 3])



const letterPositions = function(string) {
  let letterPos = {};

  const str = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (!str[i].match(/ /)) {
      if (!letterPos[str[i]]) letterPos[str[i]] = [];
      letterPos[str[i]].push(i);
    }
  }
  return letterPos;
};

module.exports = letterPositions;