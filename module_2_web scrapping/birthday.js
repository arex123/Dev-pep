//highest wicket taker

const request = require('request');
const cheerio = require('cheerio');
const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard';

request(url,cb); //cb means callback

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        extracthtml(html);
    }
}

function extracthtml(html){
    const $ = cheerio.load(html);
    let teamArr = $('.match-info.match-info-MATCH .team');
    let wTeamName;
    for(let i=0;i<teamArr.length;i++){
        let hasClass = $(teamArr[i]).hasClass('team-gray')
        if(hasClass==false){
            let teamNameEle = $(teamArr[i]).find('.name');
            wTeamName = teamNameEle.text().trim();
        }
    }
    // console.log(wTeamName);

    let innigsArr = $('.card.content-block.match-scorecard-table .Collapsible');
    let htmlStr = "";
    for(let i=0;i<innigsArr.length;i++){
        // let cHtml = $(innerArr[i]).html();
        // htmlStr+=cHtml; //to store the html of two teams name and inning section
        let teamNameElem = $(innigsArr[i]).find(".header-title.label")
        let teamName = teamNameElem.text();
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();

    
            let tableElem = $(innigsArr[i]).find(".table.batsman");
            let allBatsMan = $(tableElem).find("tr");
            for(let j=0;j<allBatsMan.length;j++){
                let allColsOfPlayer = $(allBatsMan[j]).find("td");
                let isbatsman = $(allColsOfPlayer[0]).hasClass("batsman-cell");
                if(isbatsman){
                    let href = $(allColsOfPlayer[0]).find("a").attr("href");
                    let name = $(allColsOfPlayer[0]).text();
                    let fullLink = "https://www.espncricinfo.com"+href;
                    // console.log(fullLink);
                    getBirthdayPage(fullLink,name,teamName);
                }          

                

            }

        }

    }


function getBirthdayPage(url,name,teamName){
        request(url,cb);
        function cb(error,response,html){
                if(error){
                    console.log(error);
                }else{
                    extractBday(html,name,teamName);
                }
        }
}

function extractBday(html,name,teamName){
    const $ = cheerio.load(html);
    const detailArr = $('.player-card-description');
    let bday = $(detailArr[1]).text();
    console.log(`${name} plays for ${teamName} and was born on ${bday}`);

}



