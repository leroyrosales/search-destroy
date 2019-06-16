const cheerio = require('cheerio')
const fs = require('fs');
const $ = cheerio.load('<h2 class="title">Hello world</h2>')

$('h1.title').text('Hello world!')
$('h1').addClass('welcome')

fs.writeFile("index.html", $.html(), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 