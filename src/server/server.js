var morgan      = require('morgan'),
	bodyparser  = require('body-Parser')
	express     = require('express'),
	MongoClient = require('mongodb').MongoClient,
	assert      = require('assert'),
	path        = require("path");



var packageRoutes = require('./routes/packages')

var hostname = 'localhost'
var port = 3000

var app = express();

app.use(morgan('dev'));


MongoClient.connect('mongodb://localhost:27107/hotelOffers', function(err, db) {
    "use strict";

    assert.equal(null, err);
    console.log("Successfully connected to MongoDB.");

	packageRoutes.config(express, app, bodyparser, db);

	app.use(express.static(__dirname + '/public'));

	app
	.get('/',function(req,res){
		res.sendFile(path.join(__dirname+'/public/index.html'));
	})
	// .get('/:entity',function(req,res){
	// 	res.redirect('/#/' + req.params.entity);
	// })
	// .get('/:entity/:id',function(req,res){
	// 	res.redirect(`/#/${req.params.entity}/${req.params.id}`);
	// })

	app.listen(port, hostname, function() {
		console.log(`Server running at http://${hostname}/${port}`)
	});

});
