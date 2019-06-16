const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('index.html');

request('https://www.badmovies.org/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        $('.contab0').each((i, el) => {
            const title = $(el)
            .find('.titlebox0')
            .text()
            writeStream.write(`<li>${title}</li>`);
        });

        console.log('Scraping Done...');
    }
});