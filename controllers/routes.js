var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res){
	burger.all(function(burger_data){
		console.log(burger_data);
		res.render('index', {burger_data});
	})
})

router.put('/burgers/update', function(req,res){
			console.log("THE ID PICKED:::  " + JSON.stringify(req.body));

	burger.update(req.body.id, function(result){
		console.log(result);
		res.redirect('/');
	});
});

module.exports = router;