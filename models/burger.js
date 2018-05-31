var orm = require('../config/orm.js');

var burger = {
	all: function(callback){
		orm.all('burgers', function(res){
			callback(res);
		})
	}
}

module.exports = burger;