var express = require('express')
var request = require('request')
var app = express()

// Place json data here
var host = 'http://dennistel.nl/movies/'

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', function (req, res) {
  request(host, function (error, response, body) {
    var data = JSON.parse(body)
    res.render('index.ejs', {movies: data})
  });
})

app.get('/movies/:id', function (req, res) {
  request(host + req.params.id, function (error, response, body) {
    var data = JSON.parse(body)
    res.render('detail.ejs', {movie: data})
  });
})

var server = app.listen(1338, function () {
   console.log('server is running on port 1338')
})
