var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// modules
var index = require('./routes/index');


// middleware
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// express routes
app.use('/', index);


// start server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
  console.log('listening on port ', app.get('port'));
});
