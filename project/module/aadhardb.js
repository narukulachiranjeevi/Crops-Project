var mongoose = require('mongoose');
var schema = mongoose.Schema;
var aadharschema = new schema({
	aadhar:Number,
	seedname:String,
	quantities:String,
	kgs:Number,
	total:Number,
	date:Date
})
module.exports=mongoose.model('aadharpurchase',aadharschema);