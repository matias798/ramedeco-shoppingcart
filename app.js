var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/views/index.html')
});

app.get('/demo', function (req, res) {
	res.sendFile(__dirname + '/views/demo.html')
});

app.get('*', function (req, res) {
	res.sendFile(__dirname + '/public/' + req.url)
});

app.listen(3000, () => console.log('The app is listening at http://localhost:3000/'))

module.exports = app;
