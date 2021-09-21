const request = require('request');
request('http://www.google.com', function (error, response, html) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', html); // Print the HTML for the Google homepage.
});