var count = function(arr) {
  return 'There are ' + arr.length + ' elements in the array';
}

var adder = function(a,b) {
  return `The sum of these 2 numbers is ${a+b}`;
}

var pi = 3.142;

module.exports.count = count;
module.exports.adder = adder;
module.exports.pi = pi;
