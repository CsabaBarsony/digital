Reports = new Mongo.Collection("reports");

Reports.allow({
	insert: function(){
		return true;
	},
	update: function(userId, doc){
		return !!userId;
	}
});