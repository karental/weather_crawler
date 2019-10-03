const fetch = require('node-fetch');
const cheerio = require('cheerio');


const url = 'https://www.timeanddate.com/weather/results.html?query=';
const cityUrl = 'https://www.timeanddate.com/';


function searchForCity(cityname) { 
    return fetch(`${url}${cityname}`)
        .then(response => response.text())
        .then(body => {
            const $ = cheerio.load(body);
            $href = $('.sep-thick').children().eq(0)
            const cityUnique = $href.attr('href');
            return cityUnique
        })
}

function getCity(cityUni) {
    console.log('hello' + cityUni);
    return fetch(`${cityUrl}${cityUni}`)
        .then(response => response.text())
        .then(body => {
            let weather;
            let hours = [];
            const $ = cheerio.load(body);
            const $temp = $('#qlook').children().eq(2);
            var humidity;
            const imageSrc = $('#cur-weather').attr('src');
            const $name = $('.pg-title__title');
            const discription = $('p').first().text();
            const wind = $('br.clear').next().text().split('Wind')[1];
            $('#qfacts').filter(function () {
                $('p').each(function (index, element) {
                    if (index === 7) {
                        humidity = $(this).text();
                    }
                });
            });
            weather = {
                CityName: $name.text(),
                Temp: $temp.text(),
                Image: imageSrc,
                Discription: discription,
                Wind: wind,
                Humidity: humidity
            }

            return weather;
        });
}
module.exports = {
    searchForCity,
    getCity
}


