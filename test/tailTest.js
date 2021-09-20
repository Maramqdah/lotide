
const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;



// testing the code
//const array=["hi","bye"];
//console.log(tail(array));

describe ("#tail", () => {
  it("return bye for [hi, bye]", () =>{
    assert.deepEqual(tail(["hi","bye"]),'bye' )
  })
})
