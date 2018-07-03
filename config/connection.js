var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'us-cdbr-iron-east-04.cleardb.net',
	//port: '3306', // for localhost only
	user: 'b1553a54af55ec',
	password: 'dedd2204',
	database: 'heroku_bf64e0465e83135' //burgers_db
})

connection.connect(function(err){
	if (err)throw err;
	console.log("Connected as id: " + connection.threadId);
})

module.exports = connection; 