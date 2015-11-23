var mongoose = require('mongoose')

var schema = {

	_id: {
		type:String,
		required:true
	}

	parents:{
		type:String,
		ref:'Category'
	}

	ancestors:{
		type:String,
		ref:'Category'
	}
}

module.exports = new mongoose.Schema(schema)
module.exports.categorySchema = schema