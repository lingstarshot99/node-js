/*
var time = 0;

var timer = setInterval(function() {
  time += 2;
  console.log(time + ' seconds has passed');
  if (time > 5) {
    clearInterval(timer);
    console.log(__dirname);
    console.log(__filename);

  }

}, 2000);
*/

var stuff = require('./stuff');

console.log(stuff.count(['beyblade', 'kaiser', 'ninja storm']));
console.log(stuff.adder(3,4));
console.log(stuff.adder(stuff.pi,5));
