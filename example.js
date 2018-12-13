/*
*  Example of Use to check the time difference 
* between memomization and non memomization 
*/

require('./index.js');

function sqrt(args) {
  return Math.sqrt(args);
}

var memomizeService = sqrt.memomize();

console.time("Non memomized call");
console.log(memomizeService(sqrt(9)));
console.timeEnd("Non memomized call");

console.time("Memomized call");
console.log(memomizeService(sqrt(9)));
console.timeEnd("Memomized call");
