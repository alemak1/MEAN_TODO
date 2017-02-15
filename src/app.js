'use strict';

//debugger;

var express = require('express');
var router = require('./api');

var app = express();

app.use('/',express.static('public'));

require('./database');
require('./seed');
app.use('/api', router);


app.listen(3000, function(){
	console.log("The server is running on port 3000!");
});
