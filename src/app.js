'use strict';

//debugger;

var express = require('express');
var router = require('./api');
var parser = require('body-parser');

var app = express();

app.use('/',express.static('public'));
app.use(parser.json());

require('./database');
require('./seed');
app.use('/api', router);


app.listen(5000, function(){
	console.log("The server is running on port 5000!");
});
