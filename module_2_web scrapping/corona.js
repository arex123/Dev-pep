
const request = require('request');
const cheerio = require('cheerio');
request('https://www.worldometers.info/coronavirus/', function (error, response, html) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   console.log('body:', html); // Print the HTML for the Google homepage.

if(error){
        console.log(error);
}else{
    let a = handlepage(html);
    console.log(a);
    console.log(response);
    console.log(a);
}

});


function handlepage(html){
    let seltool = cheerio.load(html);
    let cases = seltool('#maincounter-wrap > div > span');
    // for(let i=0;i<cases.length;i++){
    //         let data = seltool(cases[i]).text();
    //         console.log("data",data);
    // }
    return seltool(cases[0]).text();
    
}