//last ball commentry
//link : https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary

const request = require('request');
const cheerio = require('cheerio');
const { default: DomHandler } = require('domhandler');

const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary'

request(url,cb);
function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        handle(html);
    }
}
function handle(html){
    let seltool = cheerio.load(html);
    let commentary = seltool('.match-comment-wrapper> .match-comment-long-text > p');
    let text = seltool(commentary[0]).text();
    let texthtml = seltool(commentary[0]).html();
    console.log(text);
    console.log(texthtml);
}