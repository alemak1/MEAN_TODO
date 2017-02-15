'use strict';

var express = require('express');

var app = express();

app.use('/',express.static('public'));

var router = express.Router();

router.get('/todos',function(req,res){
	res.json({todos:[]});
});

// TODO: Add POST route to create new entries

// TODO: Add PUT route to update existing entries

// TODO: Add a DELETE route to delete entries

app.use('/api', router);

app.listen(3000, function(){
	console.log("The server is running on port 3000!");
});
