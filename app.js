var express = require('express');
var app = express();

/*
app.get('/', function (req, res) {
  res.send('Hello World!');
});
*/
const index = require('./routes/index');
const path = __dirname + '/views/';

app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));

app.use('/', index);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
