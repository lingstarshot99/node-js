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

var count = require('./counter');

console.log(count(['beyblade', 'kaiser', 'ninja storm']));
