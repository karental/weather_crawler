const express = require('express');
const path = require('path');

const crawler = require('./crawler');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
res.sendFile(path.join(__dirname, 'build', 'index.html'))});
    

app.get('/getlink/:cityname', (req, res) => { // get link part
    crawler
        .searchForCity(req.params.cityname)
        .then(weather => {
            console.log(weather)
            res.json(weather)
        });
});

app.get('/getforecast/', (req, res) => { // get data from page with link part
    crawler
        .getCity(req.query.cityUni)
        .then(data => {
            console.log('WHAT IS THE CITYUNI?', data)
            res.json(data)
        })
        ;
});


const port = process.eventNames.PORT || 3000;
app.listen(port, () => {
    console.log('Listening');

})