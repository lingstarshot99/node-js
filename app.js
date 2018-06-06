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

/*
var stuff = require('./stuff');

console.log(stuff.count(['beyblade', 'kaiser', 'ninja storm']));
console.log(stuff.adder(3,4));
console.log(stuff.adder(stuff.pi,5));
*/

//<-------require lesson----->>

/*
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
*/

//<----------read and write files------------->
/*
//uses readFileSync and writeFileSync

var fs = require('fs');

var readMe = fs.readFileSync('readMe.txt','utf8');
console.log(readMe);

fs.writeFileSync('writeMe.txt','Testing for the writeFileSync method.');


//async task
var fs = require('fs');

fs.readFile('readMe.txt', 'utf8', function(err, data){
  console.log(data);
  fs.writeFile('writeMeAsync.txt', data);
});
*/

//<---------creating server----------------->
/*
var http = require('http');

var server = http.createServer(function(req, res){
  console.log('listening port : ' + req.url)
  res.writeHeader(200, {'Content-Type' : 'text/plain'});
  res.end('Hey guys, server is working');
});

server.listen(9000, '127.0.0.1');
console.log('hye giyi');
*/

// <------------readable stream---------->
/*
var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + 'readMe.txt', 'utf8');
var writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');

readStream.on('data', function(chunk){
  console.log('new chunk');
  writeStream.write(chunk);
});
*/

//<--------pipe------->
/*
var fs = require('fs');

var myRead = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWrite = fs.createWriteStream(__dirname + '/writeMe.txt');

myRead.pipe(myWrite);
*/

//<----------stream content to port----------->
/*
var http = require('http');
var fs = require('fs');

var content = fs.createReadStream(__dirname + '/contentsample.txt', 'utf8');
var server = http.createServer(function(req, res) {
  res.writeHeader(200, {'Content-Type' : 'text/plain'});
  content.pipe(res);
});

server.listen(3000, '127.0.0.1');
*/

//<<-------------serve html----------->>
/*
var http = require('http');
var fs = require('fs');



var server = http.createServer(function(req, res){
  res.writeHeader(200, {'Content-Type' : 'text/html'});
  var content = fs.createReadStream(__dirname + '/index.html', 'utf8');
  content.pipe(res);
});

server.listen(3000, '127.0.0.1');
*/

//<-------serve json------>

/*

var server = http.createServer(function(req, res){
  res.writeHeader(200, {'Content-Type' : 'application/json'});
  var obj = {
    name : 'fahmi',
    age : 19,
    job : 'ninja'
  }
  res.end(JSON.stringify(obj));
  console.log(req.url)
});

server.listen(3000, '127.0.0.1');
*/

//<---------basic routing------->
/*
var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res) {
  console.log('request for : ' + req.url);
  if (req.url === '/' || req.url === '/home') {
    res.writeHeader(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
  } else if(req.url === '/contacts-us'){
    res.writeHeader(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contacts.html','utf8').pipe(res);
  } else if(req.url === '/api/users') {
    var users = [{name: 'fahmi', age: 19},{name: 'ryu', age:40}];
    res.writeHeader(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(users));
  } else {
    res.writeHeader(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/fail.html', 'utf8').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
*/

//<-------express--------->

var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
  res.sendFile(__dirname + '/contacts.html');
});

app.get('/help', function(req, res){
  res.sendFile(__dirname + '/contentsample.txt');
});

app.get('/profile/:name', function(req, res){
  var info = {age : 19, job : 'student', hobbies: ['eating', 'fishing', 'gaming']};
  res.render('profile', {name: req.params.name, data: info});
});

app.listen(3000);
