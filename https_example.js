// Require the HTTPS Module
var https = require('https');

console.log('I did it!');

// Make a simple request
var options = {
  host: 'www.example.org',
  path: '/'
};

// called by https when the request is made.
var callback = function() {
  console.log('In response handler callback');
}

console.log("I'm about to make the request ");

https.request(options, callback).end();

console.log("I've made the request");
