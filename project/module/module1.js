var mongoose = require('mongoose');
var shcema = mongoose.Schema;
var studentschema = new shcema({
	TBGRNO:Number,
	NAMEOFTHEGROWER:String,
	FATHERNAME:String,
	VILLAGENAME:String,
	SURVEYNO:String,
	PHONENO:Number
});
module.exports=mongoose.model('details',studentschema);