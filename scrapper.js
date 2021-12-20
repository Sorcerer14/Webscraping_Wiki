const request = require("request");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const ch="A";
const url = "https://en.wikipedia.org/wiki/"+ch;
// home page 
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractLink(html);
    }
}
function extractLink(html) {
    let $ = cheerio.load(html);
    let content = $("#mw-content-text>.mw-parser-output p");
    let list_content = $("#mw-content-text>.mw-parser-output ul");
    let htitle = $("#mw-content-text #History");
    let textTitleHistory = $(htitle[0]).text();
    let text1h = $(content[5]).text();
    let text2h = $(content[6]).text();
    let text3h = $(content[7]).text();
    var history = (textTitleHistory+"\n"+text1h+"\n"+text2h+"\n"+text3h);
    history = history.replace(/(\[[^\]]\]|\([^)]*\)|\/[^\/]*\/|\⟨[^\⟩]*\⟩)/g,'');
    console.log(history);

    let systemtitle = $("#mw-content-text #Use_in_writing_systems");
    let textTitleSystem = $(systemtitle[0]).text();
    let text1s = $(content[12]).text();
    let text2s = $(list_content[17]).text();
    let text3s = $(content[13]).text();
    let text4s = $(content[14]).text();
    var system = (textTitleSystem+"\n"+text1s+"\n"+text2s+"\n"+text3s+"\n"+text4s);
    system = system.replace(/(\[[^\]]\]|\([^)]*\)|\/[^\/]*\/|\⟨[^\⟩]*\⟩)/g,'');
    console.log(system);

    let usestitle = $("#mw-content-text #Other_uses");
    let textTitleUses = $(usestitle[0]).text();
    let text1u = $(content[17]).text();
    let text2u = $(content[18]).text();
    let text3u = $(content[19]).text();
    let text4u = $(content[20]).text();
    let text5u = $(content[21]).text();
    let text6u = $(content[22]).text();
    var uses = (textTitleUses+"\n"+text1u+"\n"+text2u+"\n"+text3u+"\n"+text4u+"\n"+text5u+"\n"+text6u);
    uses = uses.replace(/(\[[^\]]\]|\([^)]*\)|\/[^\/]*\/|\⟨[^\⟩]*\⟩)/g,'');
    console.log(uses);
    
}