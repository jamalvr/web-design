// Loading modules
var express = require('express')
var request = require('request')
var app = express()

////////////// START - SERVER //////////////
// Views vind je in map views
app.set('views', 'views');

// Set template (view) engine to .ejs
// Some popular template engines that work with Express are Pug, Mustache, and EJS. The Express application generator uses Jade as its default, but it also supports several others.
// src: https://expressjs.com/en/guide/using-template-engines.html
app.set('view engine', 'ejs');

// To serve images, CSS files, and JavaScript files in a directory named public:
// This is very important voor de server om te weten wat die moet meegeven
app.use(express.static('public'))
app.use(express.static('scripts'))

// renderen van de homepagina
app.get('/', function (req, res) {
    request(host, function (error, response, body) {
        var data = JSON.parse(body)
        var rows = data.results.bindings;
        //console.log(rows);
        res.render('index.ejs', { data: rows })
    })
})

// router naar detailpage > alles wat na index/komt wordt gezien als een ID
app.get('/:id', function (req, res) {
    var id = req.params.id
    request(host, function (error, response, body) {
        var data = JSON.parse(body)
        var rows = data.results.bindings;
        console.log(rows)

        res.render('detail.ejs', {
            data: rows,
            id: id
        })
    });
})

var server = app.listen(1337, function () {
    console.log('server is running on port 1337')
})