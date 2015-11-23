var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	_id: {
		type:String,
		required:true
	}

	name: {
		type:String,
		required:true
	}

	price: {
		type:Number,
		required: true
	}

	description: {
		type: String
	}

})

module.exports = schema