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

//<-------require lesson----->>

var events = require('events');
var util = require('util');

var Person = function(name) {
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var fahmi = new Person('fahmi');
var mike = new Person('mike');
var harry = new Person('harry');

var people = [fahmi, mike, harry];

people.forEach(function(person){
  person.on('speak', function(message){
    console.log(person.name + "'s message : " + message);
  });
});

fahmi.emit('speak', 'I did it guys!!');
