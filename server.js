// var http = require('http');

// function onRequest(request, response){
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.write('hello world');
//   response.end();
// }

// http.createServer(onRequest).listen(3000);
// console.log('The server is running...');

// Buka terminal dan ketik 'node server.js'

// NEW MODULE

var http = require('http');
var multiply = require('./multiply-module');
var pow = require('./pow-module');

function onRequest(request, response){
  response.writeHead(400, {'Content-Type': 'text/plain'});
  response.write(multiply.moduleMessage);
  multiply.logProduct(3, 14);
  pow.logProductTwo(7, 3);
  response.end();
}

http.createServer(onRequest).listen(3000);
console.log('server is running...');
