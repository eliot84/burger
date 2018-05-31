var connection = require('./connection.js');


var orm = {
	all: function(tableInput, callback){
		console.log('SELECT * ' + tableInput + ';');
		var queryString = 'SELECT * FROM ' + tableInput;
		connection.query(queryString, function(err, result){
			if(err) throw err;
			callback(result);
		})
	},

	update: function(tableInput, condition, callback){
		console.log('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition);
		var queryStringUpdate = 'UPDATE ' + tableInput + 'SET devoured=true WHERE id=' + condition;
		connection.query(queryStringUpdate, function(err, result){
			if(err)throw err;
			callback(result);
		})
	}
}

module.exports = orm;