var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	
	_id:{
		type:String,
	},

	firstName:{
		type:String,
		required:true,

	},

	lastName:{
		type:String
	},

	email:{
		type:String,
		required:true,
		match: /.+@.+\..+/
	},

	loggedInCount:{
		type: Number,
    	default: 0
	}
})

module.exports = schema