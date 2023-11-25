var mongoose = require('mongoose');
var shcema = mongoose.Schema;
var studentschema = new shcema({
	date:Date,
	tbgrno:Number,
	seedname:String,
	quantities:Number,
	cost:Number,
	total:Number
});
module.exports=mongoose.model('purchase',studentschema);