
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

//testing code
eqArrays(["1", "2", "3"], ["1", "2", "3"])
eqArrays(["1", "2", "3"], ["1", "2", 3])
