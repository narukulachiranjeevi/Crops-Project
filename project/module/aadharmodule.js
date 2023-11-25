var mongoose = require('mongoose');
var schema = mongoose.Schema;
var aadharschema = new schema({
	aadhar:Number,
	name:String,
	area:String,
	mobilenumber:Number
})
module.exports=mongoose.model('aadhar',aadharschema);